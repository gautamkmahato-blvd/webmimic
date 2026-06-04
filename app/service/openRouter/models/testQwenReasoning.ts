import {
  runTestReasoningService,
  type TestReasoningInput,
  type TestReasoningResult,
} from '@/app/service/openRouter/models/testReasoningShared';

const MODEL = 'qwen/qwen3.6-flash';
const SERVICE_NAME = 'testQwenReasoning';

export default async function testQwenReasoning(
  input: TestReasoningInput,
): Promise<TestReasoningResult> {
  return runTestReasoningService(SERVICE_NAME, MODEL, input);
}
