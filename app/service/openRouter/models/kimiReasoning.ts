import {
  runTestReasoningService,
  type TestReasoningInput,
  type TestReasoningResult,
} from '@/app/service/openRouter/models/testReasoningShared';

const MODEL = 'moonshotai/kimi-k2.6';
const SERVICE_NAME = 'kimiReasoning';

export default async function kimiReasoning(
  input: TestReasoningInput,
): Promise<TestReasoningResult> {
  return runTestReasoningService(SERVICE_NAME, MODEL, input);
}
