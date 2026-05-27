"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  FolderOpen,
  Layers,
  Film,
  CreditCard,
  MessageSquareCode,
  PanelLeft,
} from "lucide-react";

const navLinks = [
  { href: "/assets", label: "Assets", icon: FolderOpen },
  { href: "/design-systems", label: "Design Systems", icon: Layers },
  { href: "/design-chat-cursor", label: "Design Chat", icon: MessageSquareCode },
  { href: "/motion", label: "Motion", icon: Film },
  { href: "/billing", label: "Billing", icon: CreditCard },
];

const iconSlotClass = "flex size-8 shrink-0 items-center justify-center";

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [tooltip, setTooltip] = useState<{ label: string; top: number } | null>(null);

  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev);
    setTooltip(null);
  };

  return (
    <>
      <div className="flex h-screen shrink-0">
        <aside
          className={`flex h-full flex-col border-r border-neutral-200 bg-white transition-[width] duration-200 ${
            collapsed ? "w-16" : "w-64"
          }`}
        >
          <div className="flex h-[70px] shrink-0 items-center gap-2 border-b border-neutral-100 pl-4 pr-4">
            <Link href="/" className={`${iconSlotClass} min-w-0`}>
              <Image
                src="/landing-page/logo.jpg"
                alt="webmimic"
                width={24}
                height={24}
                className="rounded-[6px] shrink-0"
              />
            </Link>
            {!collapsed && (
              <span className="truncate font-extrabold text-lg tracking-tight text-neutral-900">
                Webmimic
              </span>
            )}
          </div>

          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto py-1 pl-4 pr-4">
            {navLinks.map(({ href, label, icon: Icon }) => {
              const active = pathname === href || pathname.startsWith(href + "/");
              return (
                <div key={href} className="relative">
                  <Link
                    href={href}
                    onMouseEnter={(e) => {
                      if (!collapsed) return;
                      const rect = e.currentTarget.getBoundingClientRect();
                      setTooltip({ label, top: rect.top + rect.height / 2 });
                    }}
                    onMouseLeave={() => setTooltip(null)}
                    className={`flex h-10 items-center gap-2 rounded-md text-sm font-medium transition-colors ${
                      active
                        ? "bg-neutral-100 text-neutral-900"
                        : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900"
                    }`}
                  >
                    <span className={iconSlotClass}>
                      <Icon size={16} className="shrink-0" />
                    </span>
                    {!collapsed && <span className="truncate">{label}</span>}
                  </Link>
                </div>
              );
            })}
          </nav>
        </aside>

        <div className="flex w-8 shrink-0 flex-col bg-white">
          <button
            type="button"
            onClick={toggleCollapsed}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            className="flex h-[70px] w-8 shrink-0 items-center justify-center border-b border-neutral-100 text-neutral-500 transition-colors hover:s
             hover:scale-110 hover:text-neutral-900"
          >
            <PanelLeft size={16} />
          </button>
        </div>
      </div>

      {collapsed && tooltip && (
        <div
          className="pointer-events-none fixed z-50 -translate-y-1/2 rounded-md bg-neutral-900 px-2 py-1 text-xs font-medium text-white shadow-sm"
          style={{ top: tooltip.top, left: "3.75rem" }}
        >
          {tooltip.label}
        </div>
      )}
    </>
  );
}
