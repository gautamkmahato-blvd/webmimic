import {
  runEvidenceReasoningService,
  type EvidenceReasoningInput,
  type EvidenceReasoningResult,
} from '@/app/service/openRouter/models/evidenceReasoningShared';

const MODEL = 'google/gemini-3-flash-preview';
const SERVICE_NAME = 'gemini3EvidenceReasoning';

export default async function gemini3EvidenceReasoning(
  input: EvidenceReasoningInput,
): Promise<EvidenceReasoningResult> {
  return runEvidenceReasoningService(SERVICE_NAME, MODEL, input);
}
