import { VIDEO_ANIMATION_RECONSTRUCTION_PROMPT } from '@/lib/prompts/video_generation_prompt';
import { fetchAllowedMediaUrl } from '@/lib/security/allowedMediaUrl';
import {
  CursorApiError,
  getCursorApiKey,
  runCursorCompletion,
  type CursorPrompt,
  type CursorPromptImage,
} from './cursorApiClient';

const CURSOR_VIDEO_ANALYSIS_MODEL_ID = 'composer-2.5';

const NO_TOOLS_PREFIX = `Important: respond with text only in your reply. Do not use tools, file operations, shell commands, or code execution.`;

function buildUserPrompt(code: string, videoUrl: string, imageUrl: string): string {
  return `The attached video shows the full animation.
The attached image represents the first static frame.
The following React + Tailwind component matches the first frame exactly.

Video URL: ${videoUrl}
Image URL: ${imageUrl}

Reconstruct the animation behavior and update the component accordingly.

Here is the component code:

\`\`\`tsx
${code}
\`\`\`
`;
}

async function urlToAttachment(url: string): Promise<CursorPromptImage> {
  const attachment = await fetchAllowedMediaUrl(url, { allowDataUrl: true });
  return attachment;
}

export default async function cursorVideoAnalysis(
  videoUrl: string,
  imageUrl: string,
  code: string
): Promise<{ status: boolean; result?: string; message: string }> {
  try {
    console.log('===================================================');
    console.log('CURSOR_VIDEO_ANALYSIS_STARTS_HERE');
    console.log('===================================================');

    const apiKey = getCursorApiKey();
    if (!apiKey) {
      return { status: false, message: 'CURSOR_API_KEY is not configured or is empty.' };
    }

    const [videoAttachment, imageAttachment] = await Promise.all([
      urlToAttachment(videoUrl),
      urlToAttachment(imageUrl),
    ]);

    const userPrompt = buildUserPrompt(code, videoUrl, imageUrl);

    const prompt: CursorPrompt = {
      text: `${NO_TOOLS_PREFIX}\n\n${VIDEO_ANIMATION_RECONSTRUCTION_PROMPT}\n\n${userPrompt}`,
      images: [videoAttachment, imageAttachment],
    };

    const { status, result } = await runCursorCompletion(apiKey, prompt, {
      modelId: CURSOR_VIDEO_ANALYSIS_MODEL_ID,
    });

    if (status === 'ERROR') {
      return { status: false, message: 'Cursor completion failed' };
    }

    console.log('[cursorVideoAnalysis] Analysis complete, response length:', result.length);

    return {
      status: true,
      result,
      message: 'Successfully analyzed video + image + code via Cursor.',
    };
  } catch (err) {
    console.error('[cursorVideoAnalysis] Error:', err);
    if (err instanceof CursorApiError) {
      return { status: false, message: err.message };
    }
    return {
      status: false,
      message: err instanceof Error ? err.message : 'Unknown error occurred.',
    };
  }
}
