import { OPENROUTER_BASE_URL } from '@/lib/utils/enum';
import OpenAI from 'openai';

const openRouterClient = new OpenAI({
  baseURL: OPENROUTER_BASE_URL,
  apiKey: process.env.OPENROUTER_API_KEY,
});

export default openRouterClient;