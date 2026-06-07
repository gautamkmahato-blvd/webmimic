import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Reports",
  description: "Browse saved WCAG accessibility audit reports.",
};

export default function AccessibilityReportLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
