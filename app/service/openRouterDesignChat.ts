/**
 * Design-system chat service.
 * Wraps the existing OpenRouter chat client with a design-system aware system
 * prompt so the model treats the user's selected `.md` documentation as the
 * source of truth.
 *
 * Inputs:
 *   - designSystemName / designSystemMarkdown: optional, loaded by the route
 *     from /public/files/<slug>.md
 *   - userInput: the user's text message
 *   - imageUrls: array of image URLs OR base64 data URLs forwarded to the
 *     model as `image_url` content parts
 *
 * Returns the same shape as openRouterChat:
 *   { status, result?, message }
 */

import openRouterChat, {
  type KieChatContentPart,
  type KieChatMessage,
} from './openRouterChat';

export interface DesignChatInput {
  designSystemName?: string;
  designSystemMarkdown?: string;
  userInput: string;
  imageUrls?: string[];
}

export type DesignChatSuccess = { status: true; result: string; message: string };
export type DesignChatFailure = { status: false; message: string };
export type DesignChatResult = DesignChatSuccess | DesignChatFailure;

const BASE_SYSTEM_PROMPT =
  'You are a senior product designer and front-end engineer who helps users ' +
  'design, refine, and implement UI using a specific design system. ' +
  'When the user provides a design system reference, treat it as the source of ' +
  'truth for colors, typography, spacing, components, and tone. ' +
  'Return clear, actionable answers. When generating UI code, use React + ' +
  'Tailwind by default unless the user asks otherwise. Keep answers focused.';

function buildSystemPrompt(name?: string, markdown?: string): string {
  if (!markdown || !markdown.trim()) return BASE_SYSTEM_PROMPT;
  const header = name
    ? `The user has loaded the "${name}" design system. Use the documentation below as the source of truth.`
    : 'Use the design system documentation below as the source of truth.';
  return `${BASE_SYSTEM_PROMPT}\n\n${header}\n\n--- DESIGN SYSTEM START ---\n${markdown}\n--- DESIGN SYSTEM END ---`;
}

export default async function openRouterDesignChat(
  input: DesignChatInput
): Promise<DesignChatResult> {
  const { designSystemName, designSystemMarkdown, userInput, imageUrls = [] } = input;

  const userText = (userInput ?? '').trim();
  if (!userText) {
    return { status: false, message: 'userInput is required' };
  }

  const systemPrompt = buildSystemPrompt(designSystemName, designSystemMarkdown);

  const userContent: KieChatContentPart[] = [{ type: 'text', text: userText }];
  for (const url of imageUrls) {
    if (typeof url === 'string' && url.trim()) {
      userContent.push({ type: 'image_url', image_url: { url } });
    }
  }

  const messages: KieChatMessage[] = [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: userContent },
  ];

  const result = await openRouterChat({
    messages,
    stream: false,
  });

  if (!result.status) {
    return { status: false, message: result.message };
  }

  return {
    status: true,
    result: result.result,
    message: result.message,
  };
}
