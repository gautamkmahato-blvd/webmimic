import { RECREATE_FROM_SCREENSHOT_SYSTEM_PROMPT } from '@/lib/prompts/recreate_from_screenshot_prompt';
import { fetchAllowedMediaUrl } from '@/lib/security/allowedMediaUrl';
import {
  CursorApiError,
  getCursorApiKey,
  runCursorCompletion,
  type CursorPrompt,
} from './cursorApiClient';

const CURSOR_RECREATE_MODEL_ID = 'composer-2.5';

const NO_TOOLS_PREFIX = `Important: respond with text only in your reply. Do not use tools, file operations, shell commands, or code execution.`;

export interface RecreateFromScreenshotInput {
  html: string;
  css: string;
  screenshotUrl: string;
}

function buildUserPrompt(html: string, css: string): string {
  return `Recreate this component with 99% visual accuracy.

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
}

async function screenshotUrlToImage(
  screenshotUrl: string
): Promise<{ data: string; mimeType: string }> {
  return fetchAllowedMediaUrl(screenshotUrl, { allowDataUrl: true });
}

export default async function cursorRecreateComponent(
  input: RecreateFromScreenshotInput
): Promise<{ status: boolean; result?: string; message: string }> {
  try {
    const { html, css, screenshotUrl } = input;

    console.log('===================================================');
    console.log('CURSOR_RECREATE_COMPONENT_STARTS_HERE');
    console.log('===================================================');

    const apiKey = getCursorApiKey();
    if (!apiKey) {
      return { status: false, message: 'CURSOR_API_KEY is not configured or is empty.' };
    }

    const screenshotImage = await screenshotUrlToImage(screenshotUrl);
    const userPrompt = buildUserPrompt(html, css);

    const prompt: CursorPrompt = {
      text: `${NO_TOOLS_PREFIX}\n\n${RECREATE_FROM_SCREENSHOT_SYSTEM_PROMPT}\n\n${userPrompt}`,
      images: [screenshotImage],
    };

    const { status, result } = await runCursorCompletion(apiKey, prompt, {
      modelId: CURSOR_RECREATE_MODEL_ID,
    });

    if (status === 'ERROR') {
      return { status: false, message: 'Cursor completion failed' };
    }

    console.log('[cursorRecreateComponent] Generation complete, response length:', result.length);

    return {
      status: true,
      result,
      message: 'Successfully analyzed video + image + code via Cursor.',
    };
  } catch (err) {
    console.error('[cursorRecreateComponent] Error:', err);
    if (err instanceof CursorApiError) {
      return { status: false, message: err.message };
    }
    return {
      status: false,
      message: err instanceof Error ? err.message : 'Unknown error occurred.',
    };
  }
}
