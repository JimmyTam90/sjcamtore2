import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function LegalLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl space-y-4 px-4 py-12 leading-relaxed text-slate-300 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_a]:underline [&_a]:underline-offset-4">
        <h1 className="text-3xl font-extrabold text-white">{title}</h1>
        <p className="text-sm text-slate-400">Last updated: October 6, 2026</p>
        {children}
      </main>
      <Footer />
    </>
  );
}
