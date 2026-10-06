import CTAButton from "./CTAButton";
import { DEFAULT_AFFILIATE_URL } from "@/lib/affiliate";

export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 pointer-events-auto border-t border-white/10 bg-ink px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
      <CTAButton href={DEFAULT_AFFILIATE_URL} product="sticky-mobile" className="w-full">Browse SJCAM cameras</CTAButton>
    </div>
  );
}
