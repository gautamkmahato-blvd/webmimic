"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "./sidebar";

const APP_PATHS = [
  "/assets",
  "/convert",
  "/design",
  "/design-systems",
  "/design-chat-cursor",
  "/kit",
  "/motion",
  "/billing",
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
