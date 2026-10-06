import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  /** Used for click analytics only (data-affiliate). */
  product?: string;
};

/** Every external affiliate CTA renders as a native anchor that opens in a new tab. Server component, no JS required. */
export default function CTAButton({ href, children, variant = "primary", className = "", product = "general" }: Props) {
  const base =
    "relative inline-flex min-h-[48px] items-center justify-center rounded-lg px-6 py-3 text-center text-lg font-bold leading-tight pointer-events-auto transition-transform duration-100 active:scale-95 motion-reduce:transition-none";
  const look =
    variant === "primary" ? "bg-brand text-white hover:bg-brand-dark" : "border border-white/40 text-white hover:bg-white/10";
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" data-affiliate={product} className={`${base} ${look} ${className}`}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
