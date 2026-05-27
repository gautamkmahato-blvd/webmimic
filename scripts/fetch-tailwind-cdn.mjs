#!/usr/bin/env node
/**
 * Downloads the Tailwind Play CDN compiler script to public/preview/tailwind.js
 * so we can serve it from our own origin and avoid CSP issues for the
 * iframe preview feature.
 *
 * Run once after install:    node scripts/fetch-tailwind-cdn.mjs
 * Or wire into postinstall:  "postinstall": "node scripts/fetch-tailwind-cdn.mjs"
 */

import { writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "..", "public", "preview", "tailwind.js");
const URL = "https://cdn.tailwindcss.com";

async function main() {
  if (existsSync(OUT) && !process.argv.includes("--force")) {
    console.log(`[fetch-tailwind-cdn] ${OUT} already exists, skipping. Pass --force to re-download.`);
    return;
  }
  console.log(`[fetch-tailwind-cdn] Downloading ${URL}...`);
  const res = await fetch(URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch Tailwind CDN: ${res.status} ${res.statusText}`);
  }
  const text = await res.text();
  await mkdir(dirname(OUT), { recursive: true });
  await writeFile(OUT, text, "utf8");
  console.log(`[fetch-tailwind-cdn] Saved ${(text.length / 1024).toFixed(1)} KB to ${OUT}`);
}

main().catch((err) => {
  console.error("[fetch-tailwind-cdn] FAILED:", err);
  process.exit(1);
});
