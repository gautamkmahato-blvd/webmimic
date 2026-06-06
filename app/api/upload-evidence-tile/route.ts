import cloudinaryService from "@/app/service/cloudinaryService";
import { NextResponse } from "next/server";
import { getClerkIdFromExtensionBearer, getExtensionCorsHeaders } from "@/lib/extension-route-helpers";
import { ratelimit } from "@/lib/upstash/rateLimiter";

export async function OPTIONS(req: Request) {
  return new NextResponse(null, { status: 204, headers: getExtensionCorsHeaders(req) });
}

/**
 * FormData upload for extension evidence-package screenshot tiles.
 * Expects multipart field `file` (PNG). Returns { url } — same shape as /api/upload-video.
 */
export async function POST(request: Request) {
  const cors = getExtensionCorsHeaders(request);

  try {
    const clerkId = await getClerkIdFromExtensionBearer(request);
    if (!clerkId) {
      return NextResponse.json(
        { error: "Unauthorized", code: "EXTENSION_AUTH_REQUIRED" },
        { status: 401, headers: cors }
      );
    }

    const { success: rateLimitOk } = await ratelimit.limit(clerkId);
    if (!rateLimitOk) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429, headers: cors }
      );
    }

    const formData = await request.formData();
    const file = formData.get("file");
    if (!(file instanceof Blob) || file.size === 0) {
      return NextResponse.json(
        { error: "Missing or empty file field" },
        { status: 400, headers: cors }
      );
    }

    const MAX_TILE_BYTES = 12 * 1024 * 1024;
    if (file.size > MAX_TILE_BYTES) {
      return NextResponse.json(
        { error: "File exceeds maximum size (12 MB)" },
        { status: 413, headers: cors }
      );
    }

    const cloudName = process.env.CLOUDINARY_NAME?.trim();
    const cloudinaryApiKey = process.env.CLOUDINARY_API_KEY?.trim();
    const cloudinaryApiSecret = process.env.CLOUDINARY_API_SECRET?.trim();
    if (!cloudName || !cloudinaryApiKey || !cloudinaryApiSecret) {
      return NextResponse.json(
        {
          error:
            "Cloudinary is not configured (CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET required)",
        },
        { status: 500, headers: cors }
      );
    }

    try {
      const buffer = Buffer.from(await file.arrayBuffer());
      const secureUrl = await cloudinaryService(buffer, "image");
      return NextResponse.json({ url: secureUrl }, { headers: cors });
    } catch (error) {
      console.error("[upload-evidence-tile] upload error:", error);
      return NextResponse.json(
        {
          error: "Upload failed",
          details: error instanceof Error ? error.message : "Unknown error occurred",
        },
        { status: 500, headers: cors }
      );
    }
  } catch (error) {
    console.error("[upload-evidence-tile] unexpected error:", error);
    return NextResponse.json(
      {
        error: "Upload failed",
        details: error instanceof Error ? error.message : "Unknown error occurred",
      },
      { status: 500, headers: cors }
    );
  }
}
