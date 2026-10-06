import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Affiliate Disclosure", alternates: { canonical: "/affiliate-disclosure" } };

export default function AffiliateDisclosure() {
  return (
    <LegalLayout title="Affiliate Disclosure">
      <p className="font-semibold text-white">{SITE.disclaimer}</p>
      <p>{SITE.name} participates in the affiliate program of the SJCAM store at sjcamstores.com. Links to that store carry a referral parameter. If you buy after clicking, we may earn a commission from the merchant. The price you pay is not increased.</p>
      <p>Commissions do not change the specifications we report. We take them from the merchant&apos;s product pages and note where information is missing or inconsistent.</p>
      <p>{SITE.name} is independent. It is not the SJCAM store, and it does not claim to be an official store, dealer or representative of the brand.</p>
      <p>Questions: <a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
    </LegalLayout>
  );
}
