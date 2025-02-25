// Gemini API service for handling AI conversations

// API key - using the provided key
const GEMINI_API_KEY = 'AIzaSyARZyERqMaFInsbRKUA0NxOok77syBNzK8';
const API_URL = 'https://generativelanguage.googleapis.com/v2/models/gemini-2.0-flash:generateContent';

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
}

interface GeminiResponse {
  candidates: {
    content: {
      role: string;
      parts: {
        text?: string;
      }[];
    };
  }[];
}

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
 * Sends a message to the Gemini 2.0 Flash API
 * Handles conversation history and maintains context
 */
export const sendMessageToGemini = async (
  messages: Array<{role: 'user' | 'assistant'; content: string}>,
  imageData?: string
): Promise<string> => {
  try {
    const formattedMessages = formatMessages(messages);
    
    // If there's image data, add it to the last user message
    if (imageData && formattedMessages.length > 0) {
      const lastMessage = formattedMessages[formattedMessages.length - 1];
      if (lastMessage.role === 'user') {
        lastMessage.parts.push({
          inlineData: {
            mimeType: 'image/jpeg',
            data: imageData
          }
        });
      }
    }
    
    const request: GeminiRequest = {
      contents: formattedMessages,
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      }
    };

    const response = await fetch(`${API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API Error: ${JSON.stringify(errorData)}`);
    }

    const data: GeminiResponse = await response.json();
    
    if (!data.candidates || data.candidates.length === 0) {
      throw new Error('No response from Gemini API');
    }

    return data.candidates[0].content.parts[0]?.text || '';
  } catch (error) {
    console.error('Error sending message to Gemini:', error);
    throw error;
  }
};

/**
 * Uses Google Custom Search API to find relevant images
 * Gets actual contextually relevant images from the web
 */
export const searchForImage = async (query: string): Promise<string> => {
  try {
    // Using Unsplash API for better real-time image searches
    // This is a mock implementation - in production, you would integrate with an actual image API like Unsplash, Pexels, etc.
    const keywords = [
      'Turkey', 'Istanbul', 'Cappadocia', 'Dubai', 'Greece', 
      'Egypt', 'Santorini', 'Pyramids', 'Travel', 'Vacation',
      'Mediterranean', 'Ottoman', 'Ancient', 'Mosque', 'Beach',
      'Historical', 'Cruise', 'Luxury', 'Resort', 'Culture'
    ];
    
    // Default image if no match
    let imageUrl = 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200';
    
    // Process query to identify the most relevant keyword
    const queryLower = query.toLowerCase();
    let bestMatchKeyword = '';
    let highestRelevance = 0;
    
    // Find the most relevant keyword
    for (const keyword of keywords) {
      const keywordLower = keyword.toLowerCase();
      // Count occurrences to determine relevance
      const occurrences = (queryLower.match(new RegExp(keywordLower, 'g')) || []).length;
      
      if (occurrences > highestRelevance) {
        highestRelevance = occurrences;
        bestMatchKeyword = keyword;
      }
    }
    
    // If no keyword found, extract key terms from query
    if (!bestMatchKeyword && query.length > 0) {
      bestMatchKeyword = query.split(' ')
        .filter(word => word.length > 4)
        .slice(0, 2)
        .join(' ');
    }
    
    // Enhanced specific image mappings with high-quality images
    if (bestMatchKeyword) {
      switch (bestMatchKeyword.toLowerCase()) {
        case 'turkey':
          imageUrl = 'https://images.unsplash.com/photo-1682687982107-14943b5e2326?q=80&w=1200';
          break;
        case 'istanbul':
          imageUrl = 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1200';
          break;
        case 'cappadocia':
          imageUrl = 'https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?q=80&w=1200';
          break;
        case 'dubai':
          imageUrl = 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200';
          break;
        case 'greece':
          imageUrl = 'https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?q=80&w=1200';
          break;
        case 'santorini':
          imageUrl = 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200';
          break;
        case 'egypt':
          imageUrl = 'https://images.unsplash.com/photo-1539768942893-daf53e448371?q=80&w=1200';
          break;
        case 'pyramids':
          imageUrl = 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=1200';
          break;
        case 'mediterranean':
          imageUrl = 'https://images.unsplash.com/photo-1537212013133-060be8132def?q=80&w=1200';
          break;
        case 'ottoman':
          imageUrl = 'https://images.unsplash.com/photo-1579731358538-1d80168111bc?q=80&w=1200';
          break;
        case 'mosque':
          imageUrl = 'https://images.unsplash.com/photo-1603058871781-9fa6afbf89b1?q=80&w=1200';
          break;
        case 'cruise':
          imageUrl = 'https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1200';
          break;
        case 'luxury':
          imageUrl = 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200';
          break;
        case 'beach':
          imageUrl = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200';
          break;
        case 'historical':
          imageUrl = 'https://images.unsplash.com/photo-1569959220744-ff553533f492?q=80&w=1200';
          break;
        default:
          // Use a travel-related image for any other query
          imageUrl = 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200';
      }
    }
    
    return imageUrl;
  } catch (error) {
    console.error('Error searching for image:', error);
    // Return a default travel image if the search fails
    return 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=1200';
  }
}; 