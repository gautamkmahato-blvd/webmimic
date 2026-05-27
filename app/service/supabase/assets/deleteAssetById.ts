import { supabaseAdmin } from '@/config/supabase/supabaseAdmin';

export async function deleteAssetById(assetId: string, userId: string): Promise<void> {
  const { error } = await supabaseAdmin
    .from('assets')
    .delete()
    .eq('id', assetId)
    .eq('user_id', userId);

  if (error) {
    console.error('[deleteAssetById] failed to remove over-limit asset', { assetId, userId, error });
  }
}
