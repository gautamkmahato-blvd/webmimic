
import openRouterClient from '@/config/openrouter/config';
import { RECREATE_FROM_SCREENSHOT_SYSTEM_PROMPT } from '@/lib/prompts/recreate_from_screenshot_prompt';


export interface RecreateFromScreenshotKieInput {
  html: string;
  css: string;
  screenshotUrl: string;
}

export interface RecreateFromScreenshotqwenResult {
  code: string;
}

export default async function recreateComponent(
  input: RecreateFromScreenshotKieInput
): Promise<{ status: boolean; result?: string; message: string }> {
  try {

    const { html, css, screenshotUrl } = input;

    console.log("===================================================");
    console.log("OPENROUTER_ANALYSIS_STARTS_HERE");
    console.log("===================================================");
    const apiKey = process.env.OPENROUTER_API_KEY?.trim();
    if (!apiKey) {
      return { status: false, message: 'OPENROUTER_API_KEY is not configured or is empty.' };
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

const apiResponse = await openRouterClient.chat.completions.create({
  model: 'google/gemma-4-31b-it',
  messages: [
    {
      role: 'system',
      content: RECREATE_FROM_SCREENSHOT_SYSTEM_PROMPT,
    },
    {
      role: 'user',
      content: [
        { type: "text", text: userPrompt },
        {
          type: "image_url",
          image_url: { url: screenshotUrl },
        },
      ],
    },
  ],
});

// Extract the assistant message with reasoning_details
type ORChatMessage = (typeof apiResponse)['choices'][number]['message'] & {
  reasoning_details?: unknown;
};
const response = apiResponse.choices[0].message as ORChatMessage;

    console.log('[openRouterAnalysis] Analysis complete, response length:', response);

    return {
      status: true,
      result: response.content ?? '',
      message: 'Successfully analyzed video + image + code via OpenRouter.',
    };
  } catch (err) {
    console.error('[openRouterAnalysis] Error:', err);
    return {
      status: false,
      message: err instanceof Error ? err.message : 'Unknown error occurred.',
    };
  }
}
