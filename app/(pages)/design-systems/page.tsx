"use client";

import { useState, useMemo } from "react";
import {
  ChevronDown,
  SlidersHorizontal,
  Search,
  Sparkles,
} from "lucide-react";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import { getWebsiteScreenshotSrc } from "@/lib/design-systems/screenshots";

// ─────────────────────────────────────────────────────────────
// 92 DESIGN SYSTEMS
//
// Schema:
//   slug         → must match the filename in /public/html_files/<slug>.html
//   name         → display name on the card
//   industry     → used for the filter pills
//   cover        → tailwind gradient classes (from-X via-Y to-Z)
//   wordmarkDark → set true when the cover is light, flips text/logo to dark
//   logoSlug     → simple-icons slug (defaults to `slug` if omitted).
//                  Custom override needed where the filename and the
//                  simple-icons slug differ.
//   palette      → 4 brand colors shown as swatches at the bottom of the card
//   screenshot   → filename key in data/design-systems/cloudinary-website-screenshots.json
// ─────────────────────────────────────────────────────────────
const DESIGN_SYSTEMS = [
  // ─── AI / ML ───────────────────────────────────────────
  { slug: "claude", name: "Claude", industry: "AI", cover: "from-[#D97757] via-[#D97757] to-[#D97757]", logoSlug: "anthropic", screenshot: "Claude.png", palette: ["#D97757", "#191919", "#F4F0E9", "#C49A6C"] },
  { slug: "openai", name: "OpenAI", industry: "AI", cover: "from-neutral-900 via-black to-neutral-950", palette: ["#000000", "#10A37F", "#FFFFFF", "#6B7280"] },
  { slug: "cohere", name: "Cohere", industry: "AI", cover: "from-pink-500 via-rose-500 to-orange-500", palette: ["#FF7759", "#39594D", "#FFFFFF", "#D18EE2"] },
  { slug: "mistral", name: "Mistral", industry: "AI", cover: "from-orange-400 via-amber-500 to-yellow-500", logoSlug: "mistralai", palette: ["#FF7000", "#FFCD41", "#000000", "#FFFFFF"] },
  { slug: "huggingface", name: "Hugging Face", industry: "AI", cover: "from-yellow-400 via-amber-500 to-orange-500", screenshot: "HuggingFace.png", palette: ["#FFD21E", "#FF9D00", "#000000", "#FFFFFF"] },
  { slug: "runway", name: "Runway", industry: "AI", cover: "from-neutral-800 via-neutral-900 to-black", screenshot: "Runway.png", palette: ["#000000", "#FFFFFF", "#FF4F00", "#888888"] },
  { slug: "elevenlabs", name: "ElevenLabs", industry: "AI", cover: "from-neutral-900 via-black to-neutral-800", palette: ["#000000", "#FFFFFF", "#3B82F6", "#A0A0A0"] },
  { slug: "minimax", name: "MiniMax", industry: "AI", cover: "from-blue-600 via-indigo-700 to-purple-800", palette: ["#1E40AF", "#7C3AED", "#FFFFFF", "#000000"] },
  { slug: "xai", name: "xAI", industry: "AI", cover: "from-black via-neutral-950 to-neutral-900", screenshot: "xAI.png", palette: ["#000000", "#FFFFFF", "#1D9BF0", "#888888"] },
  { slug: "together", name: "Together AI", industry: "AI", cover: "from-blue-500 via-cyan-600 to-teal-600", palette: ["#0EA5E9", "#06B6D4", "#000000", "#FFFFFF"] },
  { slug: "replicate", name: "Replicate", industry: "AI", cover: "from-neutral-900 via-black to-neutral-950", palette: ["#000000", "#FFFFFF", "#10B981", "#6B7280"] },

  // ─── DEVELOPER ─────────────────────────────────────────
  { slug: "vercel", name: "Vercel", industry: "Developer", cover: "from-neutral-900 via-black to-neutral-950", screenshot: "Vercel.png", palette: ["#000000", "#FFFFFF", "#0070F3", "#7928CA"] },
  { slug: "github", name: "GitHub", industry: "Developer", cover: "from-neutral-700 via-neutral-800 to-neutral-900", screenshot: "GitHub.png", palette: ["#24292F", "#0969DA", "#1A7F37", "#CF222E"] },
  { slug: "cursor", name: "Cursor", industry: "Developer", cover: "from-neutral-900 via-black to-neutral-800", screenshot: "Cursor.png", palette: ["#000000", "#FFFFFF", "#3B82F6", "#A0A0A0"] },
  { slug: "warp", name: "Warp", industry: "Developer", cover: "from-purple-600 via-pink-600 to-rose-600", screenshot: "Warp.png", palette: ["#8B5CF6", "#EC4899", "#000000", "#FFFFFF"] },
  { slug: "raycast", name: "Raycast", industry: "Developer", cover: "from-red-500 via-rose-500 to-pink-500", screenshot: "Raycast.png", palette: ["#FF6363", "#000000", "#FFFFFF", "#A0A0A0"] },
  { slug: "arc", name: "Arc", industry: "Developer", cover: "from-orange-400 via-rose-400 to-purple-500", logoSlug: "arc-browser", screenshot: "Arc.png", palette: ["#FA7268", "#A78BFA", "#FBBF24", "#000000"] },
  { slug: "linear", name: "Linear", industry: "Developer", cover: "from-neutral-800 via-neutral-900 to-black", screenshot: "Linear.png", palette: ["#5E6AD2", "#0F0F10", "#E2E2E2", "#FFFFFF"] },
  { slug: "framer", name: "Framer", industry: "Developer", cover: "from-blue-500 via-purple-500 to-pink-500", screenshot: "Framer.png", palette: ["#0055FF", "#000000", "#FFFFFF", "#999999"] },
  { slug: "figma", name: "Figma", industry: "Developer", cover: "from-purple-500 via-pink-500 to-orange-500", palette: ["#F24E1E", "#A259FF", "#1ABCFE", "#0ACF83"] },
  { slug: "webflow", name: "Webflow", industry: "Developer", cover: "from-blue-600 via-indigo-600 to-purple-700", palette: ["#4353FF", "#000000", "#FFFFFF", "#A1A6F5"] },
  { slug: "retool", name: "Retool", industry: "Developer", cover: "from-emerald-500 via-teal-600 to-cyan-700", palette: ["#3D5AFE", "#000000", "#FFFFFF", "#10B981"] },
  { slug: "expo", name: "Expo", industry: "Developer", cover: "from-neutral-900 via-black to-neutral-950", palette: ["#000020", "#FFFFFF", "#4630EB", "#A0A0A0"] },
  { slug: "opencode", name: "OpenCode", industry: "Developer", cover: "from-neutral-800 via-neutral-900 to-black", screenshot: "OpenCode.png", palette: ["#000000", "#FFFFFF", "#10B981", "#6B7280"] },
  { slug: "voltagent", name: "VoltAgent", industry: "Developer", cover: "from-yellow-400 via-amber-500 to-orange-600", screenshot: "VoltAgent.png", palette: ["#FBBF24", "#000000", "#FFFFFF", "#F59E0B"] },
  { slug: "emergent", name: "Emergent", industry: "Developer", cover: "from-violet-600 via-purple-600 to-fuchsia-600", screenshot: "Emergent.png", palette: ["#7C3AED", "#000000", "#FFFFFF", "#A855F7"] },
  { slug: "lovable", name: "Lovable", industry: "Developer", cover: "from-pink-500 via-rose-500 to-red-500", screenshot: "Lovable.png", palette: ["#EC4899", "#FFFFFF", "#000000", "#FB7185"] },
  { slug: "mintlify", name: "Mintlify", industry: "Developer", cover: "from-emerald-400 via-green-500 to-teal-600", screenshot: "Mintlify.png", palette: ["#10B981", "#000000", "#FFFFFF", "#6EE7B7"] },
  { slug: "apidog", name: "Apidog", industry: "Developer", cover: "from-orange-500 via-red-500 to-rose-600", palette: ["#F87315", "#000000", "#FFFFFF", "#A0A0A0"] },
  { slug: "betterStack", name: "Better Stack", industry: "Developer", cover: "from-purple-600 via-violet-700 to-indigo-800", logoSlug: "betterstack", screenshot: "BetterStack.png", palette: ["#7C3AED", "#000000", "#FFFFFF", "#A78BFA"] },
  { slug: "sentry", name: "Sentry", industry: "Developer", cover: "from-purple-700 via-violet-800 to-purple-900", screenshot: "Sentry.png", palette: ["#362D59", "#FB7185", "#FFFFFF", "#A78BFA"] },
  { slug: "mlflow", name: "MLflow", industry: "Developer", cover: "from-sky-500 via-blue-600 to-indigo-700", screenshot: "MLflow.png", palette: ["#0194E2", "#000000", "#FFFFFF", "#43C9ED"] },
  { slug: "prisma", name: "Prisma", industry: "Developer", cover: "from-indigo-600 via-purple-700 to-violet-800", screenshot: "Prisma.png", palette: ["#2D3748", "#0C344B", "#FFFFFF", "#16A394"] },
  { slug: "supabase", name: "Supabase", industry: "Developer", cover: "from-emerald-500 via-green-600 to-emerald-700", screenshot: "Supabase.png", palette: ["#3ECF8E", "#1F1F1F", "#FFFFFF", "#A0A0A0"] },
  { slug: "neon", name: "Neon", industry: "Developer", cover: "from-neutral-900 via-black to-neutral-950", screenshot: "Neon.png", palette: ["#00E599", "#000000", "#FFFFFF", "#A0A0A0"] },
  { slug: "planetScale", name: "PlanetScale", industry: "Developer", cover: "from-neutral-900 via-black to-neutral-950", logoSlug: "planetscale", screenshot: "PlanetScale.png", palette: ["#000000", "#FFFFFF", "#3B82F6", "#A0A0A0"] },
  { slug: "mongodb", name: "MongoDB", industry: "Developer", cover: "from-green-600 via-emerald-700 to-green-800", screenshot: "MongoDB.png", palette: ["#00684A", "#13AA52", "#FFFFFF", "#001E2B"] },
  { slug: "clickhouse", name: "ClickHouse", industry: "Developer", cover: "from-yellow-400 via-amber-500 to-yellow-600", screenshot: "ClickHouse.png", palette: ["#FFCC01", "#000000", "#FFFFFF", "#FAFF69"] },
  { slug: "aerospike", name: "Aerospike", industry: "Developer", cover: "from-red-600 via-rose-700 to-red-800", screenshot: "Aerospike.png", palette: ["#C32127", "#000000", "#FFFFFF", "#A0A0A0"] },
  { slug: "hashiCorp", name: "HashiCorp", industry: "Developer", cover: "from-neutral-800 via-neutral-900 to-black", logoSlug: "hashicorp", screenshot: "HashiCorp.png", palette: ["#000000", "#FFFFFF", "#5C4EE5", "#1B1F23"] },
  { slug: "railway", name: "Railway", industry: "Developer", cover: "from-violet-700 via-purple-800 to-indigo-900", screenshot: "Railway.png", palette: ["#7B61FF", "#000000", "#FFFFFF", "#A78BFA"] },
  { slug: "hostinger", name: "Hostinger", industry: "Developer", cover: "from-purple-600 via-violet-700 to-indigo-800", screenshot: "Hostinger.png", palette: ["#673DE6", "#000000", "#FFFFFF", "#A78BFA"] },
  { slug: "aws", name: "AWS", industry: "Developer", cover: "from-neutral-800 via-neutral-900 to-black", logoSlug: "amazonwebservices", palette: ["#FF9900", "#232F3E", "#FFFFFF", "#A0A0A0"] },
  { slug: "ibm", name: "IBM", industry: "Developer", cover: "from-blue-700 via-blue-800 to-indigo-900", palette: ["#0F62FE", "#000000", "#FFFFFF", "#161616"] },
  { slug: "microsoft-office", name: "Microsoft Office", industry: "Developer", cover: "from-orange-500 via-red-500 to-orange-600", logoSlug: "microsoftoffice", screenshot: "MicrosoftOffice.png", palette: ["#D83B01", "#0078D4", "#FFFFFF", "#000000"] },
  { slug: "clerk", name: "Clerk", industry: "Developer", cover: "from-violet-600 via-purple-700 to-fuchsia-700", screenshot: "Clerk.png", palette: ["#6C47FF", "#000000", "#FFFFFF", "#A78BFA"] },
  { slug: "composio", name: "Composio", industry: "Developer", cover: "from-neutral-900 via-black to-neutral-950", screenshot: "Composio.png", palette: ["#000000", "#FFFFFF", "#A855F7", "#A0A0A0"] },
  { slug: "sanity", name: "Sanity", industry: "Developer", cover: "from-rose-600 via-red-600 to-rose-700", screenshot: "Sanity.png", palette: ["#F03E2F", "#000000", "#FFFFFF", "#A0A0A0"] },
  { slug: "resend", name: "Resend", industry: "Developer", cover: "from-neutral-900 via-black to-neutral-950", palette: ["#000000", "#FFFFFF", "#3B82F6", "#A0A0A0"] },
  { slug: "liveblocks", name: "Liveblocks", industry: "Developer", cover: "from-indigo-600 via-purple-700 to-violet-800", screenshot: "Liveblocks.png", palette: ["#4F46E5", "#000000", "#FFFFFF", "#A78BFA"] },
  { slug: "clay", name: "Clay", industry: "Developer", cover: "from-amber-200 via-orange-300 to-rose-300", wordmarkDark: true, screenshot: "Clay.png", palette: ["#FBBF24", "#FFFFFF", "#000000", "#A0A0A0"] },

  // ─── PRODUCTIVITY ──────────────────────────────────────
  { slug: "notion", name: "Notion", industry: "Productivity", cover: "from-stone-100 via-stone-200 to-stone-300", wordmarkDark: true, screenshot: "Notion.png", palette: ["#000000", "#FFFFFF", "#E03E3E", "#0F7B6C"] },
  { slug: "miro", name: "Miro", industry: "Productivity", cover: "from-yellow-400 via-amber-500 to-yellow-600", palette: ["#FFD02F", "#000000", "#FFFFFF", "#1A1A1A"] },
  { slug: "cal", name: "Cal.com", industry: "Productivity", cover: "from-neutral-900 via-black to-neutral-950", logoSlug: "caldotcom", screenshot: "CalCom.png", palette: ["#000000", "#FFFFFF", "#292929", "#A0A0A0"] },
  { slug: "cron", name: "Cron", industry: "Productivity", cover: "from-neutral-900 via-black to-neutral-950", screenshot: "Cron.png", palette: ["#000000", "#FFFFFF", "#3B82F6", "#A0A0A0"] },
  { slug: "craft", name: "Craft", industry: "Productivity", cover: "from-rose-500 via-pink-600 to-fuchsia-700", screenshot: "Craft.png", palette: ["#E63946", "#000000", "#FFFFFF", "#F8C8DC"] },
  { slug: "pitch", name: "Pitch", industry: "Productivity", cover: "from-neutral-900 via-black to-neutral-950", screenshot: "Pitch.png", palette: ["#000000", "#FFFFFF", "#3B82F6", "#A0A0A0"] },
  { slug: "superhuman", name: "Superhuman", industry: "Productivity", cover: "from-neutral-900 via-black to-neutral-950", screenshot: "Superhuman.png", palette: ["#000000", "#FFFFFF", "#7C3AED", "#A0A0A0"] },
  { slug: "airtable", name: "Airtable", industry: "Productivity", cover: "from-yellow-400 via-orange-500 to-red-500", screenshot: "Airtable.png", palette: ["#FCB400", "#FF7C00", "#F82B60", "#000000"] },

  // ─── SOCIAL ────────────────────────────────────────────
  { slug: "x", name: "X", industry: "Social", cover: "from-neutral-900 via-black to-neutral-950", screenshot: "X.png", palette: ["#000000", "#1D9BF0", "#71767B", "#F7F9F9"] },
  { slug: "reddit", name: "Reddit", industry: "Social", cover: "from-orange-500 via-red-500 to-orange-600", screenshot: "Reddit.png", palette: ["#FF4500", "#000000", "#FFFFFF", "#1A1A1B"] },
  { slug: "linkedin", name: "LinkedIn", industry: "Social", cover: "from-blue-600 via-blue-700 to-blue-800", screenshot: "LinkedIn.png", palette: ["#0A66C2", "#000000", "#FFFFFF", "#A0A0A0"] },
  { slug: "pinterest", name: "Pinterest", industry: "Social", cover: "from-red-600 via-rose-600 to-red-700", screenshot: "Pinterest.png", palette: ["#E60023", "#000000", "#FFFFFF", "#767676"] },
  { slug: "youtube", name: "YouTube", industry: "Social", cover: "from-red-500 via-red-600 to-red-700", screenshot: "YouTube.png", palette: ["#FF0000", "#000000", "#FFFFFF", "#282828"] },
  { slug: "meta", name: "Meta", industry: "Social", cover: "from-blue-500 via-indigo-600 to-purple-700", screenshot: "Meta.png", palette: ["#0668E1", "#000000", "#FFFFFF", "#A0A0A0"] },
  { slug: "producthunt", name: "Product Hunt", industry: "Social", cover: "from-orange-500 via-red-500 to-rose-600", screenshot: "ProductHunt.png", palette: ["#DA552F", "#000000", "#FFFFFF", "#A0A0A0"] },
  { slug: "ycombinator", name: "Y Combinator", industry: "Social", cover: "from-orange-500 via-orange-600 to-amber-700", screenshot: "YCombinator.png", palette: ["#F26625", "#000000", "#FFFFFF", "#A0A0A0"] },

  // ─── FINTECH ───────────────────────────────────────────
  { slug: "stripe", name: "Stripe", industry: "Fintech", cover: "from-indigo-500 via-purple-600 to-violet-700", screenshot: "Stripe.png", palette: ["#635BFF", "#0A2540", "#00D924", "#FFFFFF"] },
  { slug: "binance", name: "Binance", industry: "Fintech", cover: "from-yellow-400 via-amber-500 to-yellow-600", screenshot: "Binance.png", palette: ["#F0B90B", "#000000", "#FFFFFF", "#1E2329"] },
  { slug: "coinbase", name: "Coinbase", industry: "Fintech", cover: "from-blue-600 via-blue-700 to-indigo-800", screenshot: "Coinbase.png", palette: ["#0052FF", "#000000", "#FFFFFF", "#A0A0A0"] },
  { slug: "revolut", name: "Revolut", industry: "Fintech", cover: "from-neutral-900 via-black to-neutral-950", screenshot: "Revolut.png", palette: ["#000000", "#FFFFFF", "#0666EB", "#A0A0A0"] },
  { slug: "wise", name: "Wise", industry: "Fintech", cover: "from-green-400 via-emerald-500 to-green-600", screenshot: "Wise.png", palette: ["#9FE870", "#163300", "#FFFFFF", "#000000"] },
  { slug: "bloomberg", name: "Bloomberg", industry: "Fintech", cover: "from-neutral-900 via-black to-neutral-950", screenshot: "Bloomberg.png", palette: ["#000000", "#FFFFFF", "#FF6600", "#A0A0A0"] },

  // ─── TRAVEL / MOBILITY ────────────────────────────────
  { slug: "airbnb", name: "Airbnb", industry: "Travel", cover: "from-rose-500 via-pink-500 to-rose-600", screenshot: "Airbnb.png", palette: ["#FF385C", "#E61E4D", "#222222", "#717171"] },
  { slug: "uber", name: "Uber", industry: "Travel", cover: "from-neutral-900 via-black to-neutral-950", screenshot: "Uber.png", palette: ["#000000", "#FFFFFF", "#276EF1", "#A0A0A0"] },
  { slug: "fedex", name: "FedEx", industry: "Travel", cover: "from-purple-600 via-violet-700 to-orange-500", screenshot: "FedEx.png", palette: ["#4D148C", "#FF6600", "#FFFFFF", "#000000"] },

  // ─── AUTOMOTIVE ────────────────────────────────────────
  { slug: "tesla", name: "Tesla", industry: "Automotive", cover: "from-neutral-900 via-black to-neutral-950", screenshot: "Tesla.png", palette: ["#CC0000", "#000000", "#FFFFFF", "#A0A0A0"] },
  { slug: "bmw", name: "BMW", industry: "Automotive", cover: "from-blue-600 via-blue-700 to-blue-900", screenshot: "BMW.png", palette: ["#0066B1", "#000000", "#FFFFFF", "#A0A0A0"] },
  { slug: "ferrari", name: "Ferrari", industry: "Automotive", cover: "from-red-600 via-red-700 to-red-800", screenshot: "Ferrari.png", palette: ["#FF2800", "#000000", "#FFFFFF", "#FFE600"] },
  { slug: "lamborghini", name: "Lamborghini", industry: "Automotive", cover: "from-yellow-400 via-amber-500 to-yellow-600", screenshot: "Lamborghini.png", palette: ["#F2A900", "#000000", "#FFFFFF", "#A0A0A0"] },
  { slug: "bugatti", name: "Bugatti", industry: "Automotive", cover: "from-blue-700 via-blue-800 to-blue-950", screenshot: "Bugatti.png", palette: ["#003D7A", "#000000", "#FFFFFF", "#C9A961"] },
  { slug: "renault", name: "Renault", industry: "Automotive", cover: "from-yellow-400 via-amber-500 to-yellow-600", screenshot: "Renault.png", palette: ["#FFCB05", "#000000", "#FFFFFF", "#A0A0A0"] },

  // ─── AEROSPACE / HARDWARE ─────────────────────────────
  { slug: "spaceX", name: "SpaceX", industry: "Aerospace", cover: "from-neutral-900 via-black to-neutral-950", logoSlug: "spacex", screenshot: "SpaceX.png", palette: ["#000000", "#FFFFFF", "#005288", "#A0A0A0"] },
  { slug: "nvidia", name: "NVIDIA", industry: "Aerospace", cover: "from-green-500 via-green-600 to-emerald-700", screenshot: "NVIDIA.png", palette: ["#76B900", "#000000", "#FFFFFF", "#A0A0A0"] },
  { slug: "apple", name: "Apple", industry: "Hardware", cover: "from-stone-50 via-white to-stone-100", wordmarkDark: true, screenshot: "Apple.png", palette: ["#000000", "#F5F5F7", "#06C", "#86868B"] },

  // ─── COMMERCE / RETAIL ────────────────────────────────
  { slug: "shopify", name: "Shopify", industry: "Commerce", cover: "from-lime-500 via-green-600 to-emerald-700", palette: ["#96BF48", "#5C6AC4", "#212B36", "#F4F6F8"] },
  { slug: "nike", name: "Nike", industry: "Commerce", cover: "from-neutral-900 via-black to-neutral-950", screenshot: "Nike.png", palette: ["#000000", "#FFFFFF", "#FA5400", "#A0A0A0"] },
  { slug: "adidas", name: "Adidas", industry: "Commerce", cover: "from-neutral-900 via-black to-neutral-950", screenshot: "Adidas.png", palette: ["#000000", "#FFFFFF", "#0089D0", "#A0A0A0"] },

  // ─── ENTERTAINMENT / MEDIA ────────────────────────────
  { slug: "spotify", name: "Spotify", industry: "Entertainment", cover: "from-green-500 via-emerald-600 to-green-700", screenshot: "Spotify.png", palette: ["#1DB954", "#191414", "#FFFFFF", "#535353"] },
  { slug: "verge", name: "The Verge", industry: "Media", cover: "from-orange-500 via-red-500 to-rose-600", logoSlug: "theverge", screenshot: "TheVerge.png", palette: ["#FA4616", "#000000", "#FFFFFF", "#A0A0A0"] },
  { slug: "wired", name: "Wired", industry: "Media", cover: "from-neutral-900 via-black to-neutral-950", screenshot: "Wired.png", palette: ["#000000", "#FFFFFF", "#FF0000", "#A0A0A0"] },

  // ─── MISC ──────────────────────────────────────────────
  { slug: "redbird", name: "Redbird", industry: "Media", cover: "from-red-600 via-rose-600 to-red-700", screenshot: "Redbird.png", palette: ["#DC2626", "#000000", "#FFFFFF", "#FB7185"] },
];

const INDUSTRIES = [
  "All",
  "AI",
  "Developer",
  "Productivity",
  "Social",
  "Fintech",
  "Travel",
  "Automotive",
  "Aerospace",
  "Hardware",
  "Commerce",
  "Entertainment",
  "Media",
];

const SORT_OPTIONS = ["Popular", "A–Z", "Newest"];

// Build the simple-icons CDN URL.
// Docs: https://simpleicons.org — serves SVG by slug.
// `?viewbox=auto` keeps the natural aspect ratio.
function logoUrl(system: any) {
  const iconSlug = system.logoSlug || system.slug.toLowerCase();
  // White logos for dark covers, black for light covers.
  const color = system.wordmarkDark ? "111111" : "ffffff";
  return `https://cdn.simpleicons.org/${iconSlug}/${color}`;
}

// ─────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────
export default function DesignSystemsGallery() {
  const { isLoaded, isSignedIn } = useAuth();
  const [sort, setSort] = useState("Popular");
  const [sortOpen, setSortOpen] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let list = DESIGN_SYSTEMS.filter((ds) => {
      const matchIndustry =
        activeIndustry === "All" || ds.industry === activeIndustry;
      const matchQuery =
        !query ||
        ds.name.toLowerCase().includes(query.toLowerCase()) ||
        ds.slug.toLowerCase().includes(query.toLowerCase());
      return matchIndustry && matchQuery;
    });

    if (sort === "A–Z") {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    }
    return list;
  }, [activeIndustry, query, sort]);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* ─── TOP BAR ─────────────────────────────────────── */}
      <header className="border-b border-neutral-100 bg-white">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-8 py-5">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-neutral-900">
              <Sparkles className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="text-base font-semibold tracking-tight">
              systems.gallery
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
                Design systems,
                <br />
                <span className="text-neutral-400">collected & curated.</span>
              </h1>
              <p className="mt-4 max-w-lg text-base text-neutral-600">
                Browse the visual languages of {DESIGN_SYSTEMS.length} products
                across AI, developer tools, fintech, and more. Click any system
                to explore its full documentation.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <Stat value={DESIGN_SYSTEMS.length} label="Systems" />
              <div className="h-10 w-px bg-neutral-200" />
              <Stat value={INDUSTRIES.length - 1} label="Industries" />
              <div className="h-10 w-px bg-neutral-200" />
              <Stat value="Apr 26" label="Updated" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── FILTER BAR (TWO ROWS) ───────────────────────── */}
      <section className="sticky top-0 z-30 border-b border-neutral-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-[1600px] px-8">
          {/* ── ROW 1: sort + search + filters button ───── */}
          <div className="flex items-center gap-4 py-4">
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
                <div className="absolute left-0 top-full z-10 mt-2 w-48 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg">
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

            {/* Search — takes remaining space */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search design systems by name…"
                className="w-full rounded-xl border border-neutral-200 bg-white py-2.5 pl-11 pr-4 text-sm placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none"
              />
            </div>

            {/* Filters button */}
            <button className="flex shrink-0 items-center gap-2 rounded-xl border border-neutral-200 bg-white px-5 py-2.5 text-sm font-medium hover:border-neutral-300">
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
          </div>

          {/* ── ROW 2: industry pills ────────────────────── */}
          <div className="border-t border-neutral-100">
            <nav className="flex items-center gap-1 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {INDUSTRIES.map((ind) => (
                <button
                  key={ind}
                  onClick={() => setActiveIndustry(ind)}
                  className={`shrink-0 rounded-full px-5 py-2 text-sm transition-colors ${
                    activeIndustry === ind
                      ? "bg-neutral-100 font-medium text-neutral-900"
                      : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  {ind}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* ─── GRID ────────────────────────────────────────── */}
      <main className="mx-auto max-w-[1600px] px-8 py-8">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-neutral-500">
            Showing{" "}
            <span className="font-medium text-neutral-900">
              {filtered.length}
            </span>{" "}
            of {DESIGN_SYSTEMS.length} systems
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-lg text-neutral-400">
              No systems match your filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((ds) => (
              <SystemCard key={ds.slug} system={ds} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// STAT
// ─────────────────────────────────────────────────────────────
function Stat({ value, label }: any) {
  return (
    <div>
      <div className="text-2xl font-semibold tracking-tight tabular-nums">
        {value}
      </div>
      <div className="text-xs uppercase tracking-wider text-neutral-500">
        {label}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// CARD — logo + name centered, no meta row beneath
// ─────────────────────────────────────────────────────────────
function SystemCard({ system }: any) {
  const [hovered, setHovered] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
  const [screenshotError, setScreenshotError] = useState(false);

  const screenshotSrc = getWebsiteScreenshotSrc(system.screenshot);
  const hasScreenshot = !!screenshotSrc && !screenshotError;
  const textColor = !system.wordmarkDark ? "text-white" : "text-neutral-900";
  const href = `/html_files/${system.slug}.html`;

  const openDesignSystem = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    ) {
      return;
    }
    e.preventDefault();
    const link = document.createElement("a");
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div
      className="group relative block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br ${system.cover}`}
      >
        {/* Screenshot background — gradient is the fallback */}
        {screenshotSrc && !screenshotError && (
          <>
            <img
              src={screenshotSrc}
              alt=""
              draggable={false}
              className="absolute inset-0 h-full w-full object-cover object-top"
              onError={() => setScreenshotError(true)}
            />
          </>
        )}

        {/* Subtle grid pattern overlay — only on gradient cards */}
        {!hasScreenshot && (
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              color: system.wordmarkDark ? "#000" : "#fff",
            }}
          />
        )}

        {/* Logo + name centered — only shown when there is no screenshot */}
        {!hasScreenshot && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4">
            <div
              className={`transition-transform duration-500 ${
                hovered ? "scale-110" : "scale-100"
              }`}
            >
              {logoFailed ? (
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl font-bold ${
                    system.wordmarkDark
                      ? "bg-black/10 text-neutral-900"
                      : "bg-white/15 text-white"
                  }`}
                >
                  {system.name.charAt(0)}
                </div>
              ) : (
                <img
                  src={logoUrl(system)}
                  alt={`${system.name} logo`}
                  draggable={false}
                  className="h-12 w-12 object-contain drop-shadow-sm"
                  onError={() => setLogoFailed(true)}
                />
              )}
            </div>
            <span
              className={`font-sans text-xl font-semibold tracking-tight ${textColor} drop-shadow-sm`}
            >
              {system.name}
            </span>
          </div>
        )}

        {/* Industry tag — top-right */}
        <div className="absolute right-3 top-3 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white/90 backdrop-blur-md">
          {system.industry}
        </div>

        {/* On hover: company name + icon bottom-left, palette swatches bottom-right */}
        <div
          className={`absolute inset-x-3 bottom-3 flex items-end justify-between transition-opacity duration-200 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Company name + logo */}
          <div className="flex items-center gap-2 rounded-xl bg-black/40 px-2.5 py-1.5 backdrop-blur-md">
            {!logoFailed ? (
              <img
                src={logoUrl(system)}
                alt=""
                draggable={false}
                className="h-4 w-4 object-contain"
              />
            ) : (
              <span className="text-xs font-bold text-white">
                {system.name.charAt(0)}
              </span>
            )}
            <span className="text-xs font-medium text-white">
              {system.name}
            </span>
          </div>

          {/* Palette swatches */}
          <div className="flex gap-1">
            {system.palette.map((color: any, i: any) => (
              <div
                key={i}
                className="h-5 w-5 rounded-full border border-white/30 shadow-sm"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${system.name} design system`}
        onClick={openDesignSystem}
        className="absolute inset-0 z-10 rounded-2xl cursor-pointer"
      />
    </div>
  );
}