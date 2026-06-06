import cloudinaryService from "@/app/service/cloudinaryService";
import { NextResponse } from "next/server";
import { getClerkIdFromExtensionBearer, getExtensionCorsHeaders } from "@/lib/extension-route-helpers";
import { parseBody } from "@/lib/validation/validate";
import { UploadVideoSchema } from "@/lib/validation/schemas";
import { enforceRateLimit } from "@/lib/upstash/rateLimiter";
import { getBase64MediaSizeError, MAX_UPLOAD_MEDIA_BYTES } from "@/lib/security/base64MediaSize";

export async function OPTIONS(req: Request) {
  return new NextResponse(null, { status: 204, headers: getExtensionCorsHeaders(req) });
}

type ResourceType = "image" | "video";

function parseMediaData(dataUrl: string): { base64: string; resourceType: ResourceType } {
  const trimmed = typeof dataUrl === "string" ? dataUrl.trim() : "";
  if (trimmed.startsWith("data:image/")) {
    const base64 = trimmed.replace(/^data:image\/[^;]+;base64,/, "");
    return { base64, resourceType: "image" };
  }
  if (trimmed.startsWith("data:video/")) {
    const base64 = trimmed.replace(/^data:video\/[^;]+;base64,/, "");
    return { base64, resourceType: "video" };
  }
  throw new Error("videoData must be a data:image/* or data:video/* URL");
}

export async function POST(request: Request) {
  const cors = getExtensionCorsHeaders(request);

  try {
    const clerkId = await getClerkIdFromExtensionBearer(request);
    if (!clerkId) {
      return NextResponse.json(
        { error: 'Unauthorized', code: 'EXTENSION_AUTH_REQUIRED' },
        { status: 401, headers: cors }
      );
    }

    const rateLimited = await enforceRateLimit('upload-video', clerkId, cors);
    if (rateLimited) return rateLimited;

    const parsed = await parseBody(request, UploadVideoSchema, cors);
    if (!parsed.ok) return parsed.response;
    const { videoData } = parsed.data;

    let base64Data: string;
    let resourceType: ResourceType;
    try {
      const parsedMedia = parseMediaData(videoData);
      base64Data = parsedMedia.base64;
      resourceType = parsedMedia.resourceType;
    } catch (error) {
      return NextResponse.json(
        { error: error instanceof Error ? error.message : "Invalid data URL format" },
        { status: 400, headers: cors }
      );
    }

    const sizeError = getBase64MediaSizeError(base64Data, MAX_UPLOAD_MEDIA_BYTES);
    if (sizeError) {
      return NextResponse.json({ error: sizeError }, { status: 413, headers: cors });
    }

    const cloudName = process.env.CLOUDINARY_NAME?.trim();
    const cloudinaryApiKey = process.env.CLOUDINARY_API_KEY?.trim();
    const cloudinaryApiSecret = process.env.CLOUDINARY_API_SECRET?.trim();
    if (!cloudName || !cloudinaryApiKey || !cloudinaryApiSecret) {
      return NextResponse.json(
        { error: "Cloudinary is not configured (CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET required)" },
        { status: 500, headers: cors }
      );
    }

    try {
      const buffer = Buffer.from(base64Data, "base64");
      if (buffer.byteLength > MAX_UPLOAD_MEDIA_BYTES) {
        return NextResponse.json(
          { error: `Media exceeds maximum size (${MAX_UPLOAD_MEDIA_BYTES} bytes decoded)` },
          { status: 413, headers: cors }
        );
      }

      const secureUrl = await cloudinaryService(buffer, resourceType);
      return NextResponse.json({ url: secureUrl }, { headers: cors });
    } catch (error) {
      console.error("Upload error:", error);
      return NextResponse.json(
        {
          error: "Upload failed",
          details: error instanceof Error ? error.message : "Unknown error occurred",
        },
        { status: 500, headers: cors }
      );
    }
  } catch (error) {
    console.error("Upload unexpected error:", error);
    return NextResponse.json(
      { error: "Upload failed", details: error instanceof Error ? error.message : "Unknown error occurred" },
      { status: 500, headers: cors }
    );
  }
}
