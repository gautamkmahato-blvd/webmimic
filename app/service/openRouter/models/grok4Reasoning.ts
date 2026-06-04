import {
  runTestReasoningService,
  type TestReasoningInput,
  type TestReasoningResult,
} from '@/app/service/openRouter/models/testReasoningShared';

const MODEL = 'x-ai/grok-4.3';
const SERVICE_NAME = 'grok4Reasoning';

export default async function grok4Reasoning(
  input: TestReasoningInput,
): Promise<TestReasoningResult> {
  return runTestReasoningService(SERVICE_NAME, MODEL, input);
}
