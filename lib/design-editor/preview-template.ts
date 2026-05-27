import { AGENT_SCRIPT } from "./preview-agent";

export interface PreviewTemplateOptions {
  body: string;
  fonts?: string[];
  extraCss?: string;
  tailwindConfig?: Record<string, unknown>;
  tailwindScriptUrl?: string;
}

export function buildPreviewDocument(opts: PreviewTemplateOptions): string {
  const {
    body,
    fonts = [],
    extraCss = "",
    tailwindConfig,
    tailwindScriptUrl = "/preview/tailwind.js",
  } = opts;

  const fontLinks = fonts
    .map((href) => `<link rel="stylesheet" href="${escapeAttr(href)}" />`)
    .join("\n    ");

  const tailwindConfigScript = tailwindConfig
    ? `<script>tailwind.config = ${JSON.stringify(tailwindConfig)};</script>`
    : "";

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Preview</title>

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

    <script src="${escapeAttr(tailwindScriptUrl)}"></script>
    ${tailwindConfigScript}

    ${fontLinks}

    ${extraCss ? `<style>${extraCss}</style>` : ""}
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