import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Contact Us", alternates: { canonical: "/contact" } };

export default function Contact() {
  return (
    <LegalLayout title="Contact Us">
      <p>Questions about this site, corrections to a spec, or a privacy request? Email us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
      <p>For orders, shipping, returns or warranty claims, contact the merchant directly. We cannot see or change your order.</p>
    </LegalLayout>
  );
}
