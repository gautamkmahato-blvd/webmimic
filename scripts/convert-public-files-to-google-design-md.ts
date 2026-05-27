/**
 * Batch-convert UI Inspector design.md exports in public/files to Google DESIGN.md
 * and write them to public/google/.
 *
 * Usage:
 *   npx tsx scripts/convert-public-files-to-google-design-md.ts
 */

import fs from 'fs';
import path from 'path';
import { convertUiInspectorToGoogleDesignMd } from '../lib/design-md/convertToGoogleDesignMd';

const ROOT = path.join(process.cwd(), 'public');
const INPUT_DIR = path.join(ROOT, 'files');
const OUTPUT_DIR = path.join(ROOT, 'google');

function outputFileName(inputBase: string): string {
  return inputBase.toLowerCase().endsWith('.md') ? inputBase : `${inputBase}.md`;
}

function main(): void {
  if (!fs.existsSync(INPUT_DIR)) {
    console.error('Input directory not found:', INPUT_DIR);
    process.exit(1);
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const files = fs
    .readdirSync(INPUT_DIR)
    .filter((name) => name.toLowerCase().endsWith('.md'))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

  if (files.length === 0) {
    console.log('No .md files found in', INPUT_DIR);
    return;
  }

  let ok = 0;
  let failed = 0;

  for (const file of files) {
    const inputPath = path.join(INPUT_DIR, file);
    const outputPath = path.join(OUTPUT_DIR, outputFileName(file));

    try {
      const markdown = fs.readFileSync(inputPath, 'utf8');
      const { designMd } = convertUiInspectorToGoogleDesignMd(markdown);
      fs.writeFileSync(outputPath, designMd, 'utf8');
      ok += 1;
      console.log('✓', file, '→', path.relative(process.cwd(), outputPath));
    } catch (err) {
      failed += 1;
      const msg = err instanceof Error ? err.message : String(err);
      console.error('✗', file, msg);
    }
  }

  console.log(`\nDone: ${ok} converted, ${failed} failed, ${files.length} total.`);
  if (failed > 0) process.exit(1);
}

main();
