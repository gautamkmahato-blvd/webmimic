/**
 * Extract preview content from a Cursor design-chat response.
 * JSX/TSX is rendered via React+Babel in the iframe (faithful preview).
 * Plain HTML fragments are injected directly.
 */

export type DesignChatPreviewPayload =
  | { kind: "html"; body: string }
  | { kind: "jsx"; source: string };

const FENCE_RE = /```(?:[\w-]+)?\s*\n([\s\S]*?)```/g;

export const PREVIEW_HTML_FALLBACK: DesignChatPreviewPayload = {
  kind: "html",
  body: `<div class="min-h-[320px] flex items-center justify-center p-8 bg-zinc-50 text-zinc-500 text-sm text-center">
  <p>Could not parse a preview from the response. Try asking for a Tailwind HTML component.</p>
</div>`,
};

export const PREVIEW_LOADING_HTML: DesignChatPreviewPayload = {
  kind: "html",
  body: `<div class="min-h-[400px] flex items-center justify-center text-zinc-400 text-sm">Generating your design…</div>`,
};

/** Prefer HTML output from the model for the most reliable preview pipeline. */
export const DESIGN_CHAT_SYSTEM_PREFIX = `You are a Tailwind CSS UI generator.
Return ONE fenced \`\`\`html code block containing ONLY an HTML fragment (inner body content).
Rules:
- Use plain HTML with class="" attributes (NOT className, NOT React/JSX).
- Use Tailwind utility classes only — no inline <style> blocks unless absolutely required.
- No <html>, <head>, or <body> wrapper — just the component markup.
- No JavaScript, no event handlers, no imports.
- Use realistic placeholder text and images (https:// images or colored div placeholders).
- Match spacing, typography, and colors precisely to the user's request.`;

function extractFencedCode(text: string): string | null {
  const blocks: string[] = [];
  let match: RegExpExecArray | null;
  const re = new RegExp(FENCE_RE.source, FENCE_RE.flags);
  while ((match = re.exec(text)) !== null) {
    const block = match[1]?.trim();
    if (block) blocks.push(block);
  }
  if (!blocks.length) return null;

  const htmlBlock = blocks.find(
    (b) =>
      /^<!DOCTYPE|^<html[\s>]/i.test(b) ||
      (/^<[a-z]/i.test(b) && !isJsxSource(b) && !isBrokenHtml(b))
  );
  if (htmlBlock) return htmlBlock;

  const jsxBlock = blocks.find((b) => isJsxSource(b));
  if (jsxBlock) return jsxBlock;

  return blocks[0] ?? null;
}

function isJsxSource(code: string): boolean {
  return (
    /\bclassName=/.test(code) ||
    /^\s*import\s+/m.test(code) ||
    /^\s*['"]use client['"]/m.test(code) ||
    /\bexport\s+default/.test(code) ||
    /=>\s*[\(<]/.test(code) ||
    /\{[^}]*&&\s*\(/.test(code) ||
    /\{[^}]*\?\s*\(/.test(code) ||
    /<\?[A-Z][A-Za-z0-9]*/.test(code)
  );
}

function isBrokenHtml(html: string): boolean {
  const s = html.trim();
  if (!s) return true;
  if (/\bclassName=/.test(s)) return true;
  if (/[{}]/.test(s)) return true;
  if (/\)\s*:\s*\(/.test(s)) return true;
  if (/\)\s*\}/.test(s)) return true;
  if (/^\s*\)\s*:|\:\s*\(\s*$/m.test(s)) return true;
  if (/export\s+default|import\s+/.test(s)) return true;
  if (/=\>\s*\(/.test(s)) return true;

  const openTags = (s.match(/<[a-zA-Z][^>]*>/g) || []).filter((t) => !t.endsWith("/>")).length;
  const closeTags = (s.match(/<\/[a-zA-Z]/g) || []).length;
  if (openTags > 0 && closeTags === 0 && !s.includes("/>")) return true;
  if (openTags > closeTags + 3) return true;

  return false;
}

function extractBodyFromDocument(html: string): string {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (bodyMatch) return bodyMatch[1].trim();
  return html.trim();
}

function prepareJsxForBabel(code: string): string {
  let s = code.trim();

  s = s.replace(/^['"]use client['"];?\s*/gm, "");
  s = s.replace(/^import\s+[\s\S]*?;?\s*/gm, "");

  let renderName = "PreviewRoot";

  const exportFn = s.match(/export\s+default\s+function\s+(\w+)/);
  if (exportFn) {
    renderName = exportFn[1];
    s = s.replace(/export\s+default\s+function/, "function");
  } else {
    const exportConstRef = s.match(/export\s+default\s+(\w+)\s*;/);
    if (exportConstRef) {
      renderName = exportConstRef[1];
      s = s.replace(/export\s+default\s+\w+\s*;/, "");
    } else if (/export\s+default\s+async\s+function\s+(\w+)/.test(s)) {
      const m = s.match(/export\s+default\s+async\s+function\s+(\w+)/)!;
      renderName = m[1];
      s = s.replace(/export\s+default\s+async\s+function/, "async function");
    } else if (/export\s+default\s+function\s*\(/.test(s)) {
      s = s.replace(/export\s+default\s+function/, "function PreviewRoot");
      renderName = "PreviewRoot";
    } else if (/export\s+default/.test(s)) {
      s = s.replace(/export\s+default\s*/, "const PreviewRoot = ");
      renderName = "PreviewRoot";
    } else {
      const namedFn = s.match(/function\s+([A-Z]\w*)/);
      if (namedFn) renderName = namedFn[1];
      else {
        const namedConst = s.match(/const\s+([A-Z]\w*)\s*=/);
        if (namedConst) renderName = namedConst[1];
        else {
          s = `function PreviewRoot() {\n  return (\n    ${s}\n  );\n}`;
          renderName = "PreviewRoot";
        }
      }
    }
  }

  return `${s}

const __previewRoot = ReactDOM.createRoot(document.getElementById("root"));
__previewRoot.render(React.createElement(${renderName}));
function __refreshTailwind() {
  if (typeof tailwind !== "undefined" && typeof tailwind.refresh === "function") {
    tailwind.refresh();
  }
}
setTimeout(__refreshTailwind, 0);
setTimeout(__refreshTailwind, 150);
setTimeout(__refreshTailwind, 500);
`;
}

export function extractPreviewPayload(text: string): DesignChatPreviewPayload {
  if (!text?.trim()) return PREVIEW_HTML_FALLBACK;

  const fenced = extractFencedCode(text);
  const raw = fenced ?? (text.trim().startsWith("<") ? text.trim() : null);

  if (!raw) return PREVIEW_HTML_FALLBACK;

  if (isJsxSource(raw)) {
    return { kind: "jsx", source: prepareJsxForBabel(raw) };
  }

  const html = extractBodyFromDocument(raw);

  if (!html.includes("<") || isBrokenHtml(html)) {
    if (isJsxSource(raw) || /className|export\s+default|=>/.test(raw)) {
      return { kind: "jsx", source: prepareJsxForBabel(raw) };
    }
    return PREVIEW_HTML_FALLBACK;
  }

  return { kind: "html", body: html };
}

/** @deprecated Use extractPreviewPayload */
export function extractPreviewHtmlFromResponse(text: string): string | null {
  const payload = extractPreviewPayload(text);
  return payload.kind === "html" ? payload.body : null;
}
