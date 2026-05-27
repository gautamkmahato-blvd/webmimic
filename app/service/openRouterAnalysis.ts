
import OpenAI from 'openai';
import openRouterClient from '@/config/openrouter/config';
import { VIDEO_ANIMATION_RECONSTRUCTION_PROMPT } from '@/lib/prompts/video_generation_prompt';


export default async function openRouterAnalysis(
  videoUrl: string,
  imageUrl: string,
  code: string
): Promise<{ status: boolean; result?: string; message: string }> {
  try {
    console.log("===================================================");
    console.log("OPENROUTER_ANALYSIS_STARTS_HERE");
    console.log("===================================================");
    const apiKey = process.env.OPENROUTER_API_KEY?.trim();
    if (!apiKey) {
      return { status: false, message: 'OPENROUTER_API_KEY is not configured or is empty.' };
    }


    const userPrompt = `The attached video shows the full animation.
The attached image represents the first static frame.
The following React + Tailwind component matches the first frame exactly.

Reconstruct the animation behavior and update the component accordingly.

Here is the component code:

\`\`\`tsx
${code}
\`\`\`
`;

const apiResponse = await openRouterClient.chat.completions.create({
  model: 'google/gemini-3.5-flash',
  messages: [
    {
      role: 'system',
      content: VIDEO_ANIMATION_RECONSTRUCTION_PROMPT,
    },
    {
      role: 'user',
      // video_url is an OpenRouter extension not present in the OpenAI SDK types
      content: [
        { type: 'text', text: userPrompt },
        { type: 'video_url', video_url: { url: videoUrl } },
        { type: 'image_url', image_url: { url: imageUrl } },
      ] as unknown as OpenAI.ChatCompletionContentPart[],
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
