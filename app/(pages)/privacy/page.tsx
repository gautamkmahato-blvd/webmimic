import type { Metadata } from "next";
import { PrivacyPolicyPage } from "../../(landing)/_components/(footer)/PrivacyPolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Webmimic",
  description:
    "How Webmimic collects, uses, and protects data from webmimic.com and the Chrome extension—including screenshots, design tokens, AI processing, Clerk auth, and Polar billing.",
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
