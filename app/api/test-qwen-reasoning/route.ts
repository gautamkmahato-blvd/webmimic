import { NextResponse } from 'next/server';
import type OpenAI from 'openai';
import openRouterClient from '@/config/openrouter/config';

const MODEL = 'qwen/qwen3.6-flash';
const FIRST_QUESTION = "How many r's are in the word 'strawberry'?";
const FOLLOW_UP = 'Are you sure? Think carefully.';

type ORChatMessage = {
  role: string;
  content: string | null;
  reasoning_details?: unknown;
};

export async function POST() {
  const requestId = `test-qwen-reasoning-${Date.now()}`;
  console.log(`[${requestId}] POST /api/test-qwen-reasoning`);

  try {
    const apiKey = process.env.OPENROUTER_API_KEY?.trim();
    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: 'OPENROUTER_API_KEY is not configured or is empty.' },
        { status: 500 },
      );
    }

    const apiResponse = await openRouterClient.chat.completions.create({
      model: MODEL,
      stream: false,
      messages: [
        {
          role: 'user',
          content: [
            { type: 'text', text: 'Describe this image in 10 words.' },
            {
              type: 'image_url',
              image_url: {
                url: 'https://res.cloudinary.com/dqryhg3rs/image/upload/v1779882712/websites_screenshots/Wise.png',
              },
            },
          ] as OpenAI.ChatCompletionContentPart[],
        },
      ],
    });

    const response = apiResponse.choices[0].message as ORChatMessage;
    console.log(response);

    return NextResponse.json({
      success: true,
      content: response.content ?? '',
    });
  } catch (error) {
    console.error(`[${requestId}] error`, error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Test request failed',
      },
      { status: 500 },
    );
  }
}
