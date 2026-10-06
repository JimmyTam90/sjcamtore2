import Link from "next/link";
import CTAButton from "./CTAButton";
import { DEFAULT_AFFILIATE_URL } from "@/lib/affiliate";
import { SITE } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/95">
      <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="text-xl font-extrabold tracking-tight text-white">
          Prime<span className="text-brand">Gear</span>Lab
          <span className="sr-only"> home</span>
        </Link>
        <nav aria-label="Page sections" className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
          <a href="#cameras" className="hover:text-white">Cameras</a>
          <a href="#compare" className="hover:text-white">Compare</a>
          <a href="#terms" className="hover:text-white">Shipping &amp; returns</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>
        <CTAButton href={DEFAULT_AFFILIATE_URL} product="header" className="hidden !min-h-[44px] !px-4 !py-2 !text-base md:inline-flex">
          Visit SJCAM Store
        </CTAButton>
        <span className="text-xs text-slate-400 md:hidden">Independent guide</span>
      </div>
      <span className="sr-only">{SITE.name}</span>
    </header>
  );
}
