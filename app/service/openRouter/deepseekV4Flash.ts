
import OpenAI from 'openai';
import openRouterClient from '@/config/openrouter/config';
import { DESIGN_SYSTEM_PROMPT } from '@/lib/prompts/design_system_prompt';

export default async function deepseekV4Flash(
  prompt: string,
  imageUrls: string[] = [],
): Promise<{ status: boolean; result?: string; message: string }> {
    console.log("===================================================");
    console.log("DEEPSEEK_V4_FLASH_ANALYSIS_STARTS_HERE");
    console.log("===================================================");
    const apiKey = process.env.OPENROUTER_API_KEY?.trim();
    if (!apiKey) {
        return { status: false, message: 'OPENROUTER_API_KEY is not configured or is empty.' };
    }

    try {
        const userContent: OpenAI.ChatCompletionContentPart[] = [
          { type: 'text', text: prompt },
        ];
        for (const url of imageUrls) {
          if (typeof url === 'string' && url.trim()) {
            userContent.push({
              type: 'image_url',
              image_url: { url: url.trim() },
            } as unknown as OpenAI.ChatCompletionContentPart);
          }
        }

        const apiResponse = await openRouterClient.chat.completions.create({
            model: 'deepseek/deepseek-v4-flash',
            messages: [
                {  
                  role: 'system',
                  content: DESIGN_SYSTEM_PROMPT,
                },
                {
                  role: 'user',
                  content: userContent as unknown as OpenAI.ChatCompletionContentPart[],
                },
              ],
        });

        // Extract the assistant message with reasoning_details
        type ORChatMessage = (typeof apiResponse)['choices'][number]['message'] & {
            reasoning_details?: unknown;
        };
        const response = apiResponse.choices[0].message as ORChatMessage;

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