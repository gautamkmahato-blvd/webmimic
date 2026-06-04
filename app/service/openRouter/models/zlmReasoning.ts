import {
  runTestReasoningService,
  type TestReasoningInput,
  type TestReasoningResult,
} from '@/app/service/openRouter/models/testReasoningShared';

const MODEL = 'z-ai/glm-4.6v';
const SERVICE_NAME = 'zlmReasoning';

export default async function zlmReasoning(
  input: TestReasoningInput,
): Promise<TestReasoningResult> {
  return runTestReasoningService(SERVICE_NAME, MODEL, input);
}
