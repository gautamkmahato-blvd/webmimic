import { supabaseAdmin } from '@/config/supabase/supabaseAdmin';

const BUCKET = 'motion-components';

/**
 * Fetches raw component source code from Supabase Storage.
 * Free components live at  free/{id}.tsx
 * PRO  components live at  pro/{id}.tsx
 *
 * Returns the raw code string, or null if the file doesn't exist yet.
 */
export async function getMotionCode(id: string, isPro: boolean): Promise<string | null> {
  const path = isPro ? `pro/${id}.tsx` : `free/${id}.tsx`;

  const { data, error } = await supabaseAdmin.storage
    .from(BUCKET)
    .download(path);

  if (error) {
    // 404-style errors mean the file simply hasn't been uploaded yet
    if (error.message?.toLowerCase().includes('not found') || (error as any).status === 404) {
      return null;
    }
    console.error('[getMotionCode] storage error', path, error);
    return null;
  }

  return data.text();
}
