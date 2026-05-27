// Design system card screenshots — hosted on Cloudinary.
// Keys in data/design-systems/cloudinary-website-screenshots.json match
// the `screenshot` filename on each design system (e.g. "Claude.png").

import cloudinaryWebsiteScreenshots from "@/data/design-systems/cloudinary-website-screenshots.json";

const screenshotUrls = cloudinaryWebsiteScreenshots as Record<string, string>;

const byLowercaseKey = Object.fromEntries(
  Object.entries(screenshotUrls).map(([key, url]) => [key.toLowerCase(), url]),
);

/** Resolve a design-system screenshot filename to its Cloudinary URL. */
export function getWebsiteScreenshotSrc(filename: string | undefined): string | undefined {
  if (!filename) return undefined;
  return screenshotUrls[filename] ?? byLowercaseKey[filename.toLowerCase()];
}
