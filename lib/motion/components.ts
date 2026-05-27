// ─────────────────────────────────────────────────────────────
// Motion component helpers
//
// Videos and posters are hosted on Cloudinary. URLs are keyed by
// component.id in data/motion/cloudinary-videos.json and
// cloudinary-posters.json (same id → paired video + poster).
//
// To add a new component:
//   1. Upload .mp4 / poster via scripts/upload-*-to-cloudinary.ts
//   2. Append the new object to data/motion/animations.ts
// ─────────────────────────────────────────────────────────────

import cloudinaryPosters from "@/data/motion/cloudinary-posters.json";
import cloudinaryVideos from "@/data/motion/cloudinary-videos.json";
import { Component, SORT_OPTIONS } from "@/data/motion/options";

export type SortOption = (typeof SORT_OPTIONS)[number];

const videoUrls = cloudinaryVideos as Record<string, string>;
const posterUrls = cloudinaryPosters as Record<string, string>;

export function getVideoSrc(component: Component): string {
  if (component.videoSrc) return component.videoSrc;
  return videoUrls[component.id] ?? "";
}

export function getPosterSrc(component: Component): string | undefined {
  if (component.posterSrc) return component.posterSrc;
  return posterUrls[component.id];
}
