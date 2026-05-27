
export type Category =
  | "Animation"
  | "Scroll"
  | "Typography"
  | "Interaction"
  | "Layout"
  | "Cursor"
  | "SVG";

export type Component = {
  id: string; // unique slug — also used as the video filename
  title: string;
  author: string;
  avatar: string; // 1-2 character initials
  avatarBg: string; // hex color for the avatar circle
  category: Category;
  isPro?: boolean;
  likes: number;
  views: string; // formatted string like "2.1k"
  posterBg: string; // tailwind gradient classes for the idle state
  // Asset URLs — default to Cloudinary manifests keyed by id (see lib/motion/components.ts).
  // Override only when a component needs a custom src.
  videoSrc?: string;
  posterSrc?: string;
};


export const CATEGORIES: Array<"Discover" | Category> = [
    "Discover",
    "Animation",
    "Scroll",
    "Typography",
    "Interaction",
    "Layout",
    "Cursor",
    "SVG",
  ];
  
  export const SORT_OPTIONS = ["Popular", "Newest", "Most Viewed", "Trending"] as const;
  