/**
 * Placeholder HTML rendered inside the design-editor sandbox until the LLM
 * output replaces it. Plain HTML + Tailwind utility classes; intentionally no
 * scripts, external assets, or framework dependencies — keeps the preview a
 * self-contained document.
 */
export const DUMMY_HTML = `
<main class="min-h-screen bg-white text-neutral-900">
  <section class="border-b border-neutral-100">
    <div class="mx-auto max-w-5xl px-8 py-20 text-center">
      <span class="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600">
        New &middot; generated preview
      </span>
      <h1 class="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
        A landing page,
        <span class="text-neutral-400">ready to edit.</span>
      </h1>
      <p class="mx-auto mt-4 max-w-xl text-base text-neutral-600">
        Click any element to inspect it. Edit its classes, colors, text, and
        spacing from the panels on the right — like Figma, but for HTML.
      </p>
      <div class="mt-8 flex items-center justify-center gap-3">
        <button class="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-700">
          Get started
        </button>
        <button class="rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-medium text-neutral-700 hover:border-neutral-300">
          See examples
        </button>
      </div>
    </div>
  </section>

  <section class="border-b border-neutral-100">
    <div class="mx-auto max-w-5xl px-8 py-16">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article class="rounded-2xl border border-neutral-200 bg-white p-6">
          <div class="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 text-white">
            <span class="text-sm font-bold">1</span>
          </div>
          <h3 class="text-base font-semibold tracking-tight">Inspect</h3>
          <p class="mt-2 text-sm text-neutral-600">
            Click any node in the preview to load its properties into the side panel.
          </p>
        </article>

        <article class="rounded-2xl border border-neutral-200 bg-white p-6">
          <div class="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white">
            <span class="text-sm font-bold">2</span>
          </div>
          <h3 class="text-base font-semibold tracking-tight">Tweak</h3>
          <p class="mt-2 text-sm text-neutral-600">
            Change Tailwind classes, inline styles, or text content with the controls.
          </p>
        </article>

        <article class="rounded-2xl border border-neutral-200 bg-white p-6">
          <div class="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 text-white">
            <span class="text-sm font-bold">3</span>
          </div>
          <h3 class="text-base font-semibold tracking-tight">Save</h3>
          <p class="mt-2 text-sm text-neutral-600">
            Copy the final HTML or send it back to the chat for another iteration.
          </p>
        </article>
      </div>
    </div>
  </section>

  <footer class="border-t border-neutral-100">
    <div class="mx-auto flex max-w-5xl items-center justify-between px-8 py-8 text-xs text-neutral-500">
      <span>&copy; 2026 your.studio</span>
      <span>Built with Tailwind</span>
    </div>
  </footer>
</main>
`.trim();
