import {
  CursorApiError,
  getCursorApiKey,
  parseCursorImages,
  runCursorPrompt,
  toCursorPromptImages,
  type CursorPrompt,
} from './cursorApiClient';

export const CURSOR_DESIGN_CHAT_MAX_INPUT_CHARS = 20_000;
export const CURSOR_DESIGN_CHAT_MAX_IMAGES = 5;
export const CURSOR_DESIGN_CHAT_MODEL_ID = 'composer-2.5';

const SYSTEM_PREFIX = `You are a Tailwind CSS component generator.
Generate React components using Tailwind CSS utility classes.
Return the component code in a markdown fenced code block.
Do not create files or run shell commands — respond with code only in your message.`;

export type CursorDesignChatInput = {
  message: string;
  agentId?: string;
  images?: unknown;
  systemPrefix?: string;
  modelId?: string;
};

export type CursorDesignChatSuccess = {
  success: true;
  agentId: string;
  status: string;
  result: string;
};

export type CursorDesignChatFailure = {
  success: false;
  error: string;
  httpStatus: number;
  retryable?: boolean;
  agentId?: string;
  status?: string;
};

export type CursorDesignChatResult = CursorDesignChatSuccess | CursorDesignChatFailure;

function buildPrompt(userMessage: string, extraSystemPrefix?: string): string {
  const prefix = extraSystemPrefix
    ? `${SYSTEM_PREFIX}\n\n${extraSystemPrefix}`
    : SYSTEM_PREFIX;
  return `${prefix}\n\nUser request:\n${userMessage}`;
}

export default async function cursorDesignChat(
  input: CursorDesignChatInput
): Promise<CursorDesignChatResult> {
  const apiKey = getCursorApiKey();
  if (!apiKey) {
    return {
      success: false,
      error: 'CURSOR_API_KEY is not configured on the server.',
      httpStatus: 500,
    };
  }

  const message = (input.message ?? '').trim();
  if (!message) {
    return {
      success: false,
      error: 'message is required',
      httpStatus: 400,
    };
  }

  if (message.length > CURSOR_DESIGN_CHAT_MAX_INPUT_CHARS) {
    return {
      success: false,
      error: `message exceeds ${CURSOR_DESIGN_CHAT_MAX_INPUT_CHARS} characters`,
      httpStatus: 400,
    };
  }

  const images = parseCursorImages(input.images, CURSOR_DESIGN_CHAT_MAX_IMAGES);
  const agentId = typeof input.agentId === 'string' ? input.agentId.trim() : undefined;

  const prompt: CursorPrompt = {
    text: buildPrompt(message, input.systemPrefix),
    ...(images.length ? { images: toCursorPromptImages(images) } : {}),
  };

  try {
    const { agentId: resolvedAgentId, status, result } = await runCursorPrompt(
      apiKey,
      prompt,
      {
        agentId,
        modelId: input.modelId ?? CURSOR_DESIGN_CHAT_MODEL_ID,
      }
    );

    if (status === 'ERROR') {
      return {
        success: false,
        error: 'Agent run failed',
        httpStatus: 502,
        agentId: resolvedAgentId,
        status,
      };
    }

    return {
      success: true,
      agentId: resolvedAgentId,
      status: status.toLowerCase(),
      result,
    };
  } catch (err) {
    if (err instanceof CursorApiError) {
      return {
        success: false,
        error: err.message,
        httpStatus: err.retryable ? 503 : err.status >= 400 && err.status < 600 ? err.status : 502,
        retryable: err.retryable,
      };
    }
    throw err;
  }
}
