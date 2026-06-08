import type { Metadata } from "next";
import { PrivacyPolicyPage } from "../../(landing)/_components/(footer)/PrivacyPolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Webmimic",
  description:
    "How Webmimic handles your information—with transparency, user control, and no selling of personal data.",
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
