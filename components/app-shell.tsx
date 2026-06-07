"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "./sidebar";

/** Routes that exist in the app and use the dashboard sidebar (see sidebar.tsx navLinks). */
const APP_PATHS = [
  "/assets",
  "/accessibility-report",
  "/design-systems",
  "/design",
  "/motion",
  "/credits",
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showSidebar = APP_PATHS.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );

  if (!showSidebar) return <>{children}</>;

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
