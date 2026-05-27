// /**
//  * Upload component code files to Supabase Storage.
//  *
//  * Usage:
//  *   npx tsx scripts/upload-motion-code.ts <file-or-dir>
//  *
//  * Examples:
//  *   npx tsx scripts/upload-motion-code.ts registry/clerk_1.tsx
//  *   npx tsx scripts/upload-motion-code.ts registry/
//  *
//  * File naming: the filename (without extension) must match the component id
//  * in data/motion/animations.ts.  The script reads that file to determine
//  * whether the component is PRO and picks the correct storage path.
//  *
//  * Storage layout:
//  *   motion-components/free/{id}.tsx   ← free components
//  *   motion-components/pro/{id}.tsx    ← PRO components
//  */

// import fs from 'fs';
// import path from 'path';
// import { createClient } from '@supabase/supabase-js';
// import 'dotenv/config';

// // ── Load env ──────────────────────────────────────────────────
// const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const SERVICE_KEY  = process.env.SUPABASE_SERVICE_ROLE_KEY;

// if (!SUPABASE_URL || !SERVICE_KEY) {
//   console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment.');
//   process.exit(1);
// }

// const supabase = createClient(SUPABASE_URL, SERVICE_KEY, {
//   auth: { persistSession: false },
// });

// const BUCKET = 'motion-components';

// // ── Load component registry to know which ids are PRO ─────────
// // We parse the TS file as text rather than importing it to avoid
// // needing a full TS compilation context in this script.
// function loadProIds(): Set<string> {
//   const registryPath = path.resolve('./data/motion/animations.ts');
//   if (!fs.existsSync(registryPath)) {
//     console.warn('Could not find data/motion/animations.ts — treating all as free');
//     return new Set();
//   }
//   const src = fs.readFileSync(registryPath, 'utf8');
//   const proIds = new Set<string>();
//   // Match: id: "some_id", ... isPro: true  (within the same object block)
//   const objectBlocks = src.matchAll(/\{[^}]+isPro\s*:\s*true[^}]+\}/gs);
//   for (const [block] of objectBlocks) {
//     const idMatch = block.match(/id\s*:\s*["']([^"']+)["']/);
//     if (idMatch) proIds.add(idMatch[1]);
//   }
//   return proIds;
// }

// async function uploadFile(filePath: string, proIds: Set<string>) {
//   const id    = path.basename(filePath, path.extname(filePath));
//   const isPro = proIds.has(id);
//   const dest  = isPro ? `pro/${id}.tsx` : `free/${id}.tsx`;
//   const body  = fs.readFileSync(filePath);

//   const { error } = await supabase.storage
//     .from(BUCKET)
//     .upload(dest, body, {
//       contentType: 'text/plain',
//       upsert: true,
//     });

//   if (error) {
//     console.error(`  ✗ ${id} (${dest}) — ${error.message}`);
//   } else {
//     console.log(`  ✓ ${id} → ${dest}`);
//   }
// }

// async function main() {
//   const target = process.argv[2];
//   if (!target) {
//     console.error('Usage: npx tsx scripts/upload-motion-code.ts <file-or-dir>');
//     process.exit(1);
//   }

//   const proIds = loadProIds();
//   const absTarget = path.resolve(target);

//   const stat = fs.statSync(absTarget);

//   if (stat.isDirectory()) {
//     const files = fs.readdirSync(absTarget)
//       .filter((f) => f.endsWith('.tsx') || f.endsWith('.ts'))
//       .map((f) => path.join(absTarget, f));

//     console.log(`Uploading ${files.length} file(s) from ${target} …`);
//     for (const f of files) await uploadFile(f, proIds);
//   } else {
//     await uploadFile(absTarget, proIds);
//   }

//   console.log('Done.');
// }

// main().catch((err) => { console.error(err); process.exit(1); });
