import {
  runTestReasoningService,
  type TestReasoningInput,
  type TestReasoningResult,
} from '@/app/service/openRouter/models/testReasoningShared';

const MODEL = 'x-ai/grok-build-0.1';
const SERVICE_NAME = 'grokReasoning';

export default async function grokReasoning(
  input: TestReasoningInput,
): Promise<TestReasoningResult> {
  return runTestReasoningService(SERVICE_NAME, MODEL, input);
}
