/**
 * Upload all images from public/posters/ to the Cloudinary "posters" folder.
 *
 * Usage:
 *   npx tsx scripts/upload-posters-to-cloudinary.ts
 *   npx tsx scripts/upload-posters-to-cloudinary.ts --dry-run
 *   npx tsx scripts/upload-posters-to-cloudinary.ts --force
 *
 * Requires in .env (same as the app):
 *   CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET
 *   — or CLOUDINARY_URL=cloudinary://api_key:api_secret@cloud_name
 *
 * Writes a manifest:
 *   data/motion/cloudinary-posters.json  { "animation_1": "https://res.cloudinary.com/...", ... }
 */

import fs from 'fs';
import path from 'path';
import { v2 as cloudinary, type UploadApiResponse } from 'cloudinary';

const INPUT_DIR = path.join(process.cwd(), 'public', 'posters');
const MANIFEST_PATH = path.join(process.cwd(), 'data', 'motion', 'cloudinary-posters.json');
const CLOUDINARY_FOLDER = 'posters';
const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif']);

type Manifest = Record<string, string>;

function loadEnvFile(): void {
  const envPath = path.join(process.cwd(), '.env');
  if (!fs.existsSync(envPath)) return;

  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

function configureCloudinary(): void {
  const cloudName = process.env.CLOUDINARY_NAME?.trim();
  const apiKey = process.env.CLOUDINARY_API_KEY?.trim();
  const apiSecret = process.env.CLOUDINARY_API_SECRET?.trim();

  if (cloudName && apiKey && apiSecret) {
    cloudinary.config({
      cloud_name: cloudName,
      api_key: apiKey,
      api_secret: apiSecret,
      secure: true,
    });
    return;
  }

  const cloudinaryUrl = process.env.CLOUDINARY_URL?.trim();
  if (cloudinaryUrl) {
    const match = cloudinaryUrl.match(/^cloudinary:\/\/([^:]+):([^@]+)@(.+)$/);
    if (match) {
      cloudinary.config({
        cloud_name: match[3],
        api_key: match[1],
        api_secret: match[2],
        secure: true,
      });
      return;
    }
  }

  console.error(
    'Missing Cloudinary credentials. Set CLOUDINARY_NAME + CLOUDINARY_API_KEY + CLOUDINARY_API_SECRET (or CLOUDINARY_URL) in .env',
  );
  process.exit(1);
}

function listImageFiles(): string[] {
  if (!fs.existsSync(INPUT_DIR)) {
    console.error('Input directory not found:', INPUT_DIR);
    process.exit(1);
  }

  return fs
    .readdirSync(INPUT_DIR)
    .filter((name) => IMAGE_EXTENSIONS.has(path.extname(name).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

function readManifest(): Manifest {
  if (!fs.existsSync(MANIFEST_PATH)) return {};
  try {
    return JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8')) as Manifest;
  } catch {
    return {};
  }
}

function writeManifest(manifest: Manifest): void {
  fs.mkdirSync(path.dirname(MANIFEST_PATH), { recursive: true });
  fs.writeFileSync(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
}

function publicIdForFile(filename: string): string {
  return path.basename(filename, path.extname(filename));
}

async function uploadPoster(
  filePath: string,
  publicId: string,
  overwrite: boolean,
): Promise<UploadApiResponse> {
  return cloudinary.uploader.upload(filePath, {
    resource_type: 'image',
    folder: CLOUDINARY_FOLDER,
    public_id: publicId,
    overwrite,
    unique_filename: false,
    use_filename: false,
  });
}

async function main(): Promise<void> {
  const dryRun = process.argv.includes('--dry-run');
  const force = process.argv.includes('--force');

  loadEnvFile();
  configureCloudinary();

  const files = listImageFiles();
  if (files.length === 0) {
    console.log('No image files found in', INPUT_DIR);
    return;
  }

  const manifest = readManifest();
  let uploaded = 0;
  let skipped = 0;
  let failed = 0;

  console.log(
    `Uploading ${files.length} poster(s) from public/posters → Cloudinary folder "${CLOUDINARY_FOLDER}/"${dryRun ? ' [dry-run]' : ''}${force ? ' [force overwrite]' : ''}`,
  );

  for (const filename of files) {
    const publicId = publicIdForFile(filename);
    const filePath = path.join(INPUT_DIR, filename);
    const sizeMb = (fs.statSync(filePath).size / (1024 * 1024)).toFixed(2);

    if (!force && manifest[publicId]) {
      console.log(`  ↷ skip ${filename} (already in manifest — use --force to re-upload)`);
      skipped++;
      continue;
    }

    if (dryRun) {
      console.log(`  • would upload ${filename} → ${CLOUDINARY_FOLDER}/${publicId} (${sizeMb} MB)`);
      continue;
    }

    try {
      const result = await uploadPoster(filePath, publicId, force);
      manifest[publicId] = result.secure_url;
      writeManifest(manifest);
      console.log(`  ✓ ${filename} → ${result.secure_url}`);
      uploaded++;
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.error(`  ✗ ${filename} — ${message}`);
      failed++;
    }
  }

  if (!dryRun) {
    console.log(`\nDone. uploaded=${uploaded} skipped=${skipped} failed=${failed}`);
    console.log('Manifest:', MANIFEST_PATH);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
