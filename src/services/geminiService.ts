// Gemini API service for handling AI conversations

// API key - using the provided key
const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || 'AIzaSyARZyERqMaFInsbRKUA0NxOok77syBNzK8';

// Updated model list with gemini-2.0-flash as primary option
const GEMINI_MODELS = [
  'gemini-2.0-flash',
  'gemini-1.5-flash',
  'gemini-1.5-pro', 
  'gemini-pro'
];

// Function to get API URL for a specific model
const getApiUrl = (model: string) => {
  // All models use v1beta API endpoint based on the curl example
  return `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;
};

// Initial API URL
let API_URL = getApiUrl(GEMINI_MODELS[0]);

// Define strict types for message roles
type MessageRole = 'user' | 'model';

interface Message {
  role: MessageRole;
  parts: {
    text?: string;
    inlineData?: {
      mimeType: string;
      data: string;
    };
  }[];
}

interface GeminiRequest {
  contents: Message[];
  generationConfig?: {
    temperature?: number;
    topK?: number;
    topP?: number;
    maxOutputTokens?: number;
  };
  safetySettings?: {
    category: string;
    threshold: string;
  }[];
}

interface GeminiResponse {
  candidates: {
    content: {
      role: string;
      parts: {
        text?: string;
      }[];
    };
    finishReason?: string;
    safetyRatings?: {
      category: string;
      probability: string;
    }[];
  }[];
  promptFeedback?: {
    safetyRatings: {
      category: string;
      probability: string;
    }[];
  };
}

// Cache for common travel responses to improve performance
const responseCache = new Map<string, { response: string, timestamp: number }>();
const CACHE_EXPIRY = 1000 * 60 * 60 * 24; // 24 hours
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

// Rate limiting protection
let lastApiCallTimestamp = 0;
const MIN_API_CALL_INTERVAL = 500; // 500ms minimum between API calls

/**
 * Converts standard chat messages to Gemini API format
 * Fixes type issues by ensuring correct role type
 */
export const formatMessages = (messages: Array<{role: 'user' | 'assistant'; content: string}>): Message[] => {
  return messages.map(message => ({
    role: message.role === 'assistant' ? 'model' : 'user' as MessageRole,
    parts: [{ text: message.content }]
  }));
};

/**
 * Generate a consistent cache key from user message
 */
const generateCacheKey = (message: string): string => {
  return message.toLowerCase().trim().replace(/\s+/g, ' ');
};

/**
 * Implements exponential backoff for API retries
 */
const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Sends a message to the Gemini 2.0 Flash API
 * Handles conversation history and maintains context
 */
export const sendMessageToGemini = async (
  messages: Array<{role: 'user' | 'assistant'; content: string}>,
  latestUserMessage: string
): Promise<string> => {
  try {
    // Check cache for common travel queries first
    const cacheKey = generateCacheKey(latestUserMessage);
    const cachedResponse = responseCache.get(cacheKey);
    
    if (cachedResponse && (Date.now() - cachedResponse.timestamp) < CACHE_EXPIRY) {
      console.log('Using cached response');
      return cachedResponse.response;
    }
    
    // Rate limiting protection
    const now = Date.now();
    const timeElapsed = now - lastApiCallTimestamp;
    if (timeElapsed < MIN_API_CALL_INTERVAL) {
      await wait(MIN_API_CALL_INTERVAL - timeElapsed);
    }
    
    // Detect if the user is asking about specific tour packages
    const enhancedUserMessage = enhanceUserMessageWithTourContext(latestUserMessage);
    
    // If tour context was added, replace the user's last message with the enhanced version
    if (enhancedUserMessage !== latestUserMessage) {
      const lastUserMessageIndex = findLastUserMessageIndex(messages);
      if (lastUserMessageIndex !== -1) {
        messages = [...messages];
        messages[lastUserMessageIndex] = {
          ...messages[lastUserMessageIndex],
          content: enhancedUserMessage
        };
      }
    }
    
    const formattedMessages = formatMessages(messages);
    
    // Try each model in sequence until one works
    let lastError: Error | null = null;
    
    for (const model of GEMINI_MODELS) {
      try {
        console.log(`Trying model: ${model}`);
        // Update API URL for current model
        const currentApiUrl = getApiUrl(model);
        
        // Implement retry logic with exponential backoff
        let response: GeminiResponse | null = null;
        let retries = 0;
        
        while (retries < MAX_RETRIES && !response) {
          try {
            const request: GeminiRequest = {
              contents: formattedMessages,
              generationConfig: {
                temperature: 0.7,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 800,
              },
              safetySettings: [
                {
                  category: "HARM_CATEGORY_HARASSMENT",
                  threshold: "BLOCK_MEDIUM_AND_ABOVE"
                },
                {
                  category: "HARM_CATEGORY_HATE_SPEECH",
                  threshold: "BLOCK_MEDIUM_AND_ABOVE"
                },
                {
                  category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                  threshold: "BLOCK_MEDIUM_AND_ABOVE"
                },
                {
                  category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                  threshold: "BLOCK_MEDIUM_AND_ABOVE"
                }
              ]
            };
            
            // Record API call timestamp for rate limiting
            lastApiCallTimestamp = Date.now();
            
            const apiResponse = await fetch(`${currentApiUrl}?key=${GEMINI_API_KEY}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Origin': window.location.origin
              },
              body: JSON.stringify(request),
              cache: 'no-store'
            });
            
            if (!apiResponse.ok) {
              const errorText = await apiResponse.text();
              console.error(`API Error Status: ${apiResponse.status}, Response for model ${model}:`, errorText);
              throw new Error(`API Error (${apiResponse.status}) with model ${model}: ${errorText || 'Unknown error'}`);
            }
            
            response = await apiResponse.json() as GeminiResponse;
            
            if (!response?.candidates?.[0]?.content?.parts?.[0]?.text) {
              throw new Error(`Invalid response format from ${model} API`);
            }
            
            const aiResponse = response.candidates[0].content.parts[0].text;
            
            // Cache the response for future use
            responseCache.set(cacheKey, { 
              response: aiResponse,
              timestamp: Date.now()
            });
            
            console.log(`Successfully got response from model: ${model}`);
            return aiResponse;
          } catch (error) {
            retries++;
            if (retries >= MAX_RETRIES) {
              throw error;
            }
            // Exponential backoff
            await wait(RETRY_DELAY * Math.pow(2, retries - 1));
          }
        }
      } catch (error) {
        // Store error and try next model
        console.warn(`Model ${model} failed, trying next model`, error);
        lastError = error instanceof Error ? error : new Error(String(error));
        continue;
      }
    }
    
    // If we get here, all models failed
    if (lastError) {
      throw lastError;
    } else {
      throw new Error('All Gemini models failed to respond');
    }
  } catch (error) {
    console.error('Error in sendMessageToGemini:', error);
    throw new Error('Failed to get response from AI service. Please try again later.');
  }
};

/**
 * Finds the index of the last user message in the conversation
 */
function findLastUserMessageIndex(messages: Array<{role: 'user' | 'assistant'; content: string}>): number {
  for (let i = messages.length - 1; i >= 0; i--) {
    if (messages[i].role === 'user') {
      return i;
    }
  }
  return -1;
}

/**
 * Enhance user message with tour context if they're asking about specific tours
 */
function enhanceUserMessageWithTourContext(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  // Check for Istanbul & Cappadocia tour inquiries
  if (
    (lowerMessage.includes('istanbul') && lowerMessage.includes('cappadocia')) ||
    lowerMessage.includes('6 day') || 
    lowerMessage.includes('6-day') ||
    lowerMessage.includes('6 days')
  ) {
    return `${message} [Note for Atlas: User is asking about the "Istanbul & Cappadocia" 6-day tour package. This is our entry-level tour for first-time visitors priced from $899 per person, featuring 4 nights in Istanbul and 2 nights in Cappadocia with half-board accommodation.]`;
  }
  
  // Check for Super Turkey tour inquiries
  if (
    lowerMessage.includes('super turkey') ||
    (lowerMessage.includes('turkey') && (lowerMessage.includes('10 day') || lowerMessage.includes('10-day') || lowerMessage.includes('10 days'))) ||
    (lowerMessage.includes('comprehensive') && lowerMessage.includes('turkey'))
  ) {
    return `${message} [Note for Atlas: User is asking about the "Super Turkey" 10-day comprehensive tour package priced from $1299 per person, which covers Istanbul, Cappadocia, Pamukkale, Ephesus, and Izmir/Kusadasi with 4 nights in Istanbul and 5 nights in other destinations.]`;
  }
  
  // Check for Super Turkey & Dubai tour inquiries
  if (
    (lowerMessage.includes('super turkey') && lowerMessage.includes('dubai')) ||
    (lowerMessage.includes('turkey') && lowerMessage.includes('dubai')) ||
    lowerMessage.includes('12 day') || 
    lowerMessage.includes('12-day') ||
    lowerMessage.includes('12 days')
  ) {
    return `${message} [Note for Atlas: User is asking about the "Super Turkey & Dubai" 12-day tour package priced from $1799 per person, which combines Turkish historical sites with Dubai's modern luxury and includes 3 nights in Istanbul, 4 nights in Turkey circuit, and 4 nights in Dubai.]`;
  }
  
  // Check for optional excursions inquiries
  if (
    lowerMessage.includes('optional') || 
    lowerMessage.includes('excursion') ||
    lowerMessage.includes('add-on') ||
    lowerMessage.includes('extra') ||
    lowerMessage.includes('activities')
  ) {
    let contextInfo = `${message} [Note for Atlas: User is asking about optional excursions. Our most popular optional excursions include:`;
    
    // Add balloon ride context if relevant
    if (lowerMessage.includes('balloon') || lowerMessage.includes('cappadocia') || lowerMessage.includes('air')) {
      contextInfo += " Hot Air Balloon in Cappadocia (approx $225 per person) - an early morning spectacular ride over the fairy chimneys, usually lasts about 1 hour in the air plus pre-flight preparations and post-flight celebration;";
    }
    
    // Add Bosphorus context if relevant
    if (lowerMessage.includes('bosphorus') || lowerMessage.includes('cruise') || lowerMessage.includes('istanbul')) {
      contextInfo += " Bosphorus Cruise in Istanbul (approx $75 per person) - a scenic boat tour of the strait that separates Europe and Asia, including views of palaces, fortresses, and mansions, typically 2 hours in duration;";
    }
    
    // Add Dubai desert safari context if relevant
    if (lowerMessage.includes('desert') || lowerMessage.includes('safari') || lowerMessage.includes('dubai')) {
      contextInfo += " Dubai Desert Safari (approx $95 per person) - includes dune bashing, camel rides, traditional entertainment, and BBQ dinner, typically 6 hours in the afternoon/evening;";
    }
    
    // Add Turkish bath context if relevant
    if (lowerMessage.includes('bath') || lowerMessage.includes('hamam') || lowerMessage.includes('spa')) {
      contextInfo += " Traditional Turkish Bath Experience (approx $65 per person) - authentic hammam experience with scrub and massage, typically lasts 1-2 hours;";
    }
    
    // Add Whirling Dervishes context if relevant
    if (lowerMessage.includes('dervish') || lowerMessage.includes('dance') || lowerMessage.includes('whirl')) {
      contextInfo += " Whirling Dervishes Ceremony (approx $45 per person) - cultural show of the mystical Sufi ceremony, usually 1 hour in duration;";
    }
    
    contextInfo += " Note that all optional excursions can be booked either before travel or during the tour with the local guide.]";
    return contextInfo;
  }
  
  // Check for food and culinary inquiries
  if (
    lowerMessage.includes('food') ||
    lowerMessage.includes('eat') ||
    lowerMessage.includes('culinary') ||
    lowerMessage.includes('cuisine') ||
    lowerMessage.includes('restaurant') ||
    lowerMessage.includes('meal')
  ) {
    return `${message} [Note for Atlas: User is asking about culinary aspects. Turkish cuisine highlights include kebabs, mezes, baklava, Turkish delight, and Turkish tea. Turkish breakfast is particularly elaborate. In Dubai, expect Arabic mezze, shawarma, and international cuisine. All tour packages include daily breakfast, and the number of included dinners varies by tour package. Special dietary requirements can be accommodated with advance notice. Meal costs for non-included meals range from $10-15 for lunch and $15-30 for dinner depending on the restaurant choice.]`;
  }
  
  return message;
}

/**
 * Uses local image selection for travel destinations
 * Returns a relevant image path from the public directory
 */
export const searchForImage = async (query: string): Promise<string> => {
  try {
    const queryLower = query.toLowerCase();
    
    // Map of keywords to image paths
    const imageMap = {
      'istanbul': '/images/tours/real-images/istanbul.jpg',
      'blue mosque': '/images/tours/real-images/istanbul-blue-mosque.jpg',
      'hagia sophia': '/images/tours/real-images/istanbul-hagia-sophia.jpg',
      'cappadocia': '/images/tours/real-images/cappadocia.jpg',
      'hot air balloon': '/images/tours/real-images/cappadocia-landscape.jpg',
      'dubai': '/images/tours/real-images/dubai.jpg',
      'dubai marina': '/images/destinations/dubai-marina.jpg',
      'burj khalifa': '/images/tours/real-images/dubai-burj-khalifa.jpg',
      'pamukkale': '/images/tours/real-images/pamukkale.jpg',
      'antalya': '/images/tours/real-images/antalya.jpg',
      'egypt': '/images/destinations/egypt.jpg',
      'pyramids': '/images/destinations/egypt-pyramids.jpg',
      'turkey': '/images/tours/real-images/istanbul.jpg',
      'beach': '/images/tours/real-images/antalya.jpg',
      'hotel': '/images/destinations/luxury-hotel.jpg'
    };
    
    // Find the best match in our image map
    for (const [keyword, imagePath] of Object.entries(imageMap)) {
      if (queryLower.includes(keyword)) {
        return imagePath;
      }
    }
    
    // Default to the logo if no match found
    return '/images/saladino-travel-logo.png';
  } catch (error) {
    console.error('Error searching for image:', error);
    return '/images/saladino-travel-logo.png'; // Fallback to logo on error
  }
}; 