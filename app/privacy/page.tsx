import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy", alternates: { canonical: "/privacy" } };

export default function Privacy() {
  return (
    <LegalLayout title="Privacy Policy">
      <p>This policy explains how {SITE.name} ({SITE.domain}) handles information when you visit this site.</p>
      <h2>Information we collect</h2>
      <p>We do not ask you to create an account or submit forms on this site. If analytics or advertising measurement tools are enabled, they may collect technical data such as your browser, device type, pages viewed and the links you click, using cookies or similar technologies.</p>
      <h2>Links to the merchant</h2>
      <p>Buttons on this site lead to sjcamstores.com in a new tab. The merchant, not {SITE.name}, collects and processes your order, payment and shipping details under its own privacy policy and terms.</p>
      <h2>Affiliate tracking</h2>
      <p>Our links include a referral parameter so the merchant can attribute a purchase to us. See our <a href="/affiliate-disclosure">Affiliate Disclosure</a>.</p>
      <h2>Contact</h2>
      <p>Questions about this policy: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
    </LegalLayout>
  );
}
