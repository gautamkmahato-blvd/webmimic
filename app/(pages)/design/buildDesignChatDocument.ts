import { AGENT_SCRIPT } from "@/lib/design-editor/preview-agent";
import type { DesignChatPreviewPayload } from "./extractPreviewHtml";

const TAILWIND_SCRIPT = "/preview/tailwind.js";
const REACT_URL = "https://unpkg.com/react@18/umd/react.production.min.js";
const REACT_DOM_URL = "https://unpkg.com/react-dom@18/umd/react-dom.production.min.js";
const BABEL_URL = "https://unpkg.com/@babel/standalone@7.26.9/babel.min.js";

function escapeScript(raw: string): string {
  return raw.replace(/<\/script/gi, "<\\/script");
}

function buildJsxBody(jsxSource: string): string {
  return `<div id="root"></div>
    <script crossorigin src="${REACT_URL}"></script>
    <script crossorigin src="${REACT_DOM_URL}"></script>
    <script src="${BABEL_URL}"></script>
    <script type="text/babel" data-presets="react">
${escapeScript(jsxSource)}
    </script>`;
}

export function buildDesignChatDocument(
  payload: DesignChatPreviewPayload,
  fonts: string[] = [
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
  ]
): string {
  const fontLinks = fonts
    .map((href) => `<link rel="stylesheet" href="${escapeAttr(href)}" />`)
    .join("\n    ");

  const body =
    payload.kind === "jsx" ? buildJsxBody(payload.source) : payload.body;

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Design Chat Preview</title>
    <script>
      (function () {
        var ow = console.warn;
        console.warn = function () {
          if (
            arguments.length > 0 &&
            typeof arguments[0] === "string" &&
            arguments[0].indexOf("cdn.tailwindcss.com") !== -1
          ) return;
          ow.apply(console, arguments);
        };
      })();
    </script>
    <script src="${TAILWIND_SCRIPT}"></script>
    ${fontLinks}
    <style>
      html, body { margin: 0; min-height: 100%; }
      #root { min-height: 100%; }
    </style>
  </head>
  <body>
    ${body}
    <script>${AGENT_SCRIPT}</script>
  </body>
</html>`;
}

function escapeAttr(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
