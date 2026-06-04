import { NextResponse } from 'next/server';
import gemini3EvidenceReasoning from '@/app/service/openRouter/models/gemini3EvidenceReasoning';
import {
  parseEvidenceReasoningBody,
  validateEvidenceRequiredInputs,
} from '@/app/service/openRouter/models/evidenceReasoningShared';

export async function POST(request: Request) {
  const requestId = `gemini-3-evidence-${Date.now()}`;
  console.log(`[${requestId}] POST /api/gemini-3-evidence`);

  try {
    const body = await request.json().catch(() => ({}));
    const input = parseEvidenceReasoningBody(body);
    const validation = validateEvidenceRequiredInputs(input);

    if (!validation.ok) {
      return NextResponse.json(
        { success: false, error: validation.message },
        { status: 400 },
      );
    }

    const result = await gemini3EvidenceReasoning(input);

    if (!result.status) {
      return NextResponse.json(
        { success: false, error: result.message ?? 'Request failed.', result },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, model: 'gemini-3', result });
  } catch (error) {
    console.error(`[${requestId}] error`, error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Request failed',
      },
      { status: 500 },
    );
  }
}
