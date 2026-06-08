import type { Metadata } from "next";
import { TermsOfServicePage } from "../../(landing)/_components/(footer)/TermsOfServicePage";

export const metadata: Metadata = {
  title: "Terms of Service | Webmimic",
  description:
    "Terms governing use of Webmimic, including the Chrome extension, acceptable use, credits and subscriptions, AI output, and account responsibilities.",
};

export default function Page() {
  return <TermsOfServicePage />;
}
