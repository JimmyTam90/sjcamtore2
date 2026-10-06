import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Service", alternates: { canonical: "/terms" } };

export default function Terms() {
  return (
    <LegalLayout title="Terms of Service">
      <p>By using {SITE.domain} you agree to these terms.</p>
      <h2>What this site is</h2>
      <p>{SITE.name} is an independent product guide. We are not the manufacturer or the seller of the products shown, and we do not process orders.</p>
      <h2>Accuracy</h2>
      <p>Specifications, prices, shipping and return terms come from the merchant&apos;s website at the time we checked and can change. Always confirm details on the merchant site before you buy. Where we could not confirm a detail, we leave it out.</p>
      <h2>Third-party sites</h2>
      <p>Purchases are governed by the merchant&apos;s own terms, return policy and warranty. We are not responsible for the merchant&apos;s content, products or service.</p>
      <h2>Liability</h2>
      <p>This site is provided as is, without warranties. To the extent permitted by law, {SITE.name} is not liable for losses arising from your use of this site or from purchases made on third-party sites.</p>
      <h2>Contact</h2>
      <p><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
    </LegalLayout>
  );
}
