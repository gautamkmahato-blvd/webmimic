"use client";

import { useMemo, useState } from "react";
import {
  ChevronDown,
  SlidersHorizontal,
  Play,
  Search,
} from "lucide-react";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";

import {
  CATEGORIES,
  SORT_OPTIONS,
  Component,
} from "@/data/motion/options";
import { ComponentTile } from "./_components/ComponentTile";
import { ComponentModal } from "./_components/ComponentModal";
import { SortOption } from "@/lib/motion/components";
import { COMPONENTS } from "@/data/motion/animations";

function Stat({ value, label }: { value: string | number; label: string }) {
  return (
    <div>
      <div className="text-2xl font-semibold tracking-tight tabular-nums">{value}</div>
      <div className="text-xs uppercase tracking-wider text-neutral-500">{label}</div>
    </div>
  );
}

export default function Gallery() {
  const { isLoaded, isSignedIn } = useAuth();
  const [sort, setSort] = useState<SortOption>("Popular");
  const [sortOpen, setSortOpen] = useState(false);
  const [activeCategory, setActiveCategory] =
    useState<(typeof CATEGORIES)[number]>("Discover");
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(null);
  const [query, setQuery] = useState("");

  // Derived list — applies category filter, search, and sort
  const visibleComponents = useMemo(() => {
    let list =
      activeCategory === "Discover"
        ? [...COMPONENTS]
        : COMPONENTS.filter((c) => c.category === activeCategory);

    if (query) {
      const q = query.toLowerCase();
      list = list.filter((c) => c.title.toLowerCase().includes(q));
    }

    switch (sort) {
      case "Most Viewed":
        list.sort((a, b) => parseViews(b.views) - parseViews(a.views));
        break;
      case "Trending":
        list.sort((a, b) => b.likes - a.likes);
        break;
      case "Newest":
        list.reverse(); // assumes COMPONENTS is roughly chronological
        break;
      case "Popular":
      default:
        // Keep original curated order
        break;
    }
    return list;
  }, [activeCategory, sort, query]);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <ComponentModal
        component={selectedComponent}
        onClose={() => setSelectedComponent(null)}
      />
      {/* ─── TOP BAR ─────────────────────────────────────── */}
      <header className="border-b border-neutral-100 bg-white">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-8 py-5">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-neutral-900">
              <Play className="h-3.5 w-3.5 fill-white text-white" />
            </div>
            <span className="text-base font-semibold tracking-tight">
              motion.gallery
            </span>
          </div>

          <div className="flex shrink-0 items-center">
            {!isLoaded ? (
              <span className="h-9 w-20 animate-pulse rounded-lg bg-neutral-200" />
            ) : isSignedIn ? (
              <UserButton />
            ) : (
              <SignInButton mode="modal">
                <button className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white hover:bg-neutral-700">
                  Sign in
                </button>
              </SignInButton>
            )}
          </div>
        </div>
      </header>

      {/* ─── HERO ────────────────────────────────────────── */}
      <section className="border-b border-neutral-100">
        <div className="mx-auto max-w-[1600px] px-8 py-12">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Motion,
                <br />
                <span className="text-neutral-400">animated & crafted.</span>
              </h1>
              <p className="mt-4 max-w-lg text-base text-neutral-600">
                Browse {COMPONENTS.length} motion components across UI animations,
                transitions, and interactions. Click any component to preview and copy.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <Stat value={COMPONENTS.length} label="Components" />
              <div className="h-10 w-px bg-neutral-200" />
              <Stat value={CATEGORIES.length - 1} label="Categories" />
              <div className="h-10 w-px bg-neutral-200" />
              <Stat value="Apr 26" label="Updated" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── FILTER BAR (TWO ROWS) ───────────────────────── */}
      <section className="sticky top-0 z-30 border-b border-neutral-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-[1600px] px-8">
          {/* ── ROW 1: search + sort + filters ───────────── */}
          <div className="flex items-center gap-4 py-4">
            {/* Search — takes remaining space */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search motion components by name…"
                className="w-full rounded-xl border border-neutral-200 bg-white py-2.5 pl-11 pr-4 text-sm placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none"
              />
            </div>

            {/* Sort dropdown */}
            <div className="relative shrink-0">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium hover:border-neutral-300"
              >
                {sort}
                <ChevronDown
                  className={`h-4 w-4 text-neutral-500 transition-transform ${
                    sortOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {sortOpen && (
                <div className="absolute right-0 top-full z-10 mt-2 w-44 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg">
                  {SORT_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        setSort(opt);
                        setSortOpen(false);
                      }}
                      className={`flex w-full items-center px-4 py-2.5 text-left text-sm hover:bg-neutral-50 ${
                        sort === opt ? "font-medium" : ""
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Filters button */}
            <button className="flex shrink-0 items-center gap-2 rounded-xl border border-neutral-200 bg-white px-5 py-2.5 text-sm font-medium hover:border-neutral-300">
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
          </div>

          {/* ── ROW 2: category pills ─────────────────────── */}
          <div className="border-t border-neutral-100">
            <nav className="flex items-center gap-1 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 rounded-full px-5 py-2 text-sm transition-colors ${
                    activeCategory === cat
                      ? "bg-neutral-100 font-medium text-neutral-900"
                      : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* ─── GRID ────────────────────────────────────────── */}
      <main className="mx-auto max-w-[1600px] px-8 py-6">
        {visibleComponents.length === 0 ? (
          <div className="py-24 text-center text-neutral-400">
            No components in this category yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleComponents.map((c) => (
              <ComponentTile
                key={c.id}
                component={c}
                onClick={() => setSelectedComponent(c)}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────
function parseViews(views: string): number {
  // "14.3k" → 14300 ; "998" → 998 ; "1.2m" → 1200000
  const match = views.toLowerCase().match(/^([\d.]+)\s*([km])?$/);
  if (!match) return 0;
  const num = parseFloat(match[1]);
  const unit = match[2];
  if (unit === "k") return num * 1000;
  if (unit === "m") return num * 1_000_000;
  return num;
}