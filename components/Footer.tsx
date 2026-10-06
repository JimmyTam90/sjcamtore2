import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B1220]">
      <div className="mx-auto max-w-page space-y-5 px-4 py-10 text-sm text-slate-300">
        <p className="text-lg font-extrabold text-white">{SITE.name}</p>
        <p className="max-w-2xl">{SITE.name} is an independent affiliate publisher. We are not the SJCAM store, and purchases are completed on the merchant&apos;s website.</p>
        <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/privacy" className="inline-block py-2 underline underline-offset-4 hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="inline-block py-2 underline underline-offset-4 hover:text-white">Terms of Service</Link>
          <Link href="/affiliate-disclosure" className="inline-block py-2 underline underline-offset-4 hover:text-white">Affiliate Disclosure</Link>
          <Link href="/contact" className="inline-block py-2 underline underline-offset-4 hover:text-white">Contact Us</Link>
        </nav>
        <p>Contact: <a href={`mailto:${SITE.email}`} className="underline underline-offset-4 hover:text-white">{SITE.email}</a></p>
        <p className="font-medium text-slate-200">{SITE.disclaimer}</p>
        <p>{SITE.copyright}</p>
      </div>
    </footer>
  );
}
