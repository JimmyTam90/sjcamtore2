import Image from "next/image";
import CTAButton from "./CTAButton";
import type { Product } from "@/lib/products";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-panel">
      <div className="relative h-64 w-full bg-slate-800 sm:h-72 lg:h-80">
        <Image src={p.image} alt={p.alt} fill sizes="(min-width:1152px) 560px, (min-width:640px) 48vw, 94vw" className="object-contain p-2" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-xl font-bold text-white">{p.name}</h3>
        <p className="text-slate-300">{p.tagline}</p>
        <ul className="space-y-1.5 text-sm text-slate-200">
          {p.specs.map((s) => (
            <li key={s} className="flex gap-2"><span aria-hidden="true" className="text-brand">+</span><span>{s}</span></li>
          ))}
        </ul>
        <p className="mt-auto pt-2 text-sm text-slate-300">
          {p.listedPrice ? <>Listed at <strong className="text-white">{p.listedPrice}</strong> when we checked. Confirm at checkout.</> : <>Price varies on the merchant site. Check the current price.</>}
        </p>
        <CTAButton href={p.href} product={p.id} className="w-full">View details on SJCAM Store</CTAButton>
      </div>
    </article>
  );
}
