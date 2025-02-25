import { NextRequest, NextResponse } from 'next/server';
import { sendMessageToGemini, searchForImage } from '@/services/geminiService';

// Set dynamic to force-static for static site generation
export const dynamic = 'force-static';

/**
 * For static site generation, we need to handle API routes differently
 * This is a placeholder response for the static build
 */
export async function GET() {
  return NextResponse.json({
    status: 'Gemini 2.0 Flash API is online',
    model: 'gemini-2.0-flash',
  });
}

/**
 * POST is not supported in static export
 * In a real deployment, you would need to use a serverless function or edge function
 * For GitHub Pages, we'll handle the API call directly in the client component
 */
export async function POST(req: NextRequest) {
  // This will never be called in static export, but we include it for completeness
  return NextResponse.json(
    { 
      error: 'Direct API POST is not available in static export. API calls are handled client-side.' 
    },
    { status: 501 }
  );
} 