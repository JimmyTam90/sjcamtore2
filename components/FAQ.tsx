"use client";
import { useState } from "react";

export type FAQItem = { q: string; a: React.ReactNode };

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-panel">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q}>
            <h3>
              <button
                type="button"
                id={`faq-btn-${i}`}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 text-left text-lg font-semibold text-white"
              >
                <span>{it.q}</span>
                <span aria-hidden="true" className="text-2xl text-brand">{isOpen ? "−" : "+"}</span>
              </button>
            </h3>
            <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} hidden={!isOpen} className="px-5 pb-5 text-slate-300">
              {it.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
