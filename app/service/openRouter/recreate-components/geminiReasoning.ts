import type OpenAI from 'openai';
import openRouterClient from '@/config/openrouter/config';
import { RECREATE_FROM_SCREENSHOT_SYSTEM_PROMPT } from '@/lib/prompts/recreate_from_screenshot_prompt';

type ORChatMessage = {
  role: string;
  content: string | null;
  reasoning_details?: unknown;
};

export interface RecreateFromScreenshotInput {
  html: string;
  css: string;
  screenshotUrl: string;
}

export interface RecreateFromScreenshotResult {
  code: string;
}

const MODEL = 'openai/gpt-5.3-codex';

export default async function geminiReasoning(
  input: RecreateFromScreenshotInput,
): Promise<{ status: boolean; result?: string; message: string }> {
  console.log('===================================================');
  console.log('GEMINI_ANALYSIS_STARTS_HERE');
  console.log('===================================================');

  const apiKey = process.env.OPENROUTER_API_KEY?.trim();
  if (!apiKey) {
    return { status: false, message: 'OPENROUTER_API_KEY is not configured or is empty.' };
  }

  const { html, css, screenshotUrl } = input;
  const imageUrl = screenshotUrl?.trim();
  if (!imageUrl) {
    return { status: false, message: 'screenshotUrl is required.' };
  }

  const userPrompt = `Recreate this component with 99% visual accuracy.

      The HTML and CSS below were copied from browser DevTools (Inspect Element). 
      Use them as the source of truth for structure and styles. 
      Match the screenshot as closely as possible.

      **HTML (from DevTools):**
      \`\`\`html
      ${html}
      \`\`\`

      **CSS (from DevTools):**
      \`\`\`css
      ${css}
      \`\`\`

      Return only the React/TSX code for a single Next.js page 
      component using Tailwind CSS. No markdown fences, no explanation.

    `;

  try {
    console.log('[geminiReasoning] model:', MODEL);

    const apiResponse = await openRouterClient.chat.completions.create({
      model: MODEL,
      stream: false,
      messages: [
        {
          role: 'system',
          content: RECREATE_FROM_SCREENSHOT_SYSTEM_PROMPT,
        },
        {
          role: 'user',
          content: [
            {
              type: 'image_url',
              image_url: { url: imageUrl },
            },
            { type: 'text', text: userPrompt },
          ] as OpenAI.ChatCompletionContentPart[],
        },
      ],
      max_tokens: 10000,
    });

    const response = apiResponse.choices[0]?.message as ORChatMessage | undefined;
    const result = response?.content?.trim() ?? '';

    if (!result) {
      return {
        status: false,
        message: 'Gemini returned an empty response.',
      };
    }

    return {
      status: true,
      result,
      message: 'Successfully recreated the component with Gemini.',
    };
  } catch (err) {
    console.error('[geminiReasoning] Error:', err);
    return {
      status: false,
      message: err instanceof Error ? err.message : 'Unknown error occurred.',
    };
  }
}
