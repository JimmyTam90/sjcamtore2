"use client";
export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-3xl font-black text-white">Something went wrong</h1>
      <p className="mt-4 text-slate-300">Reload the page to try again.</p>
      <button type="button" onClick={reset} className="mt-8 min-h-[48px] rounded-lg bg-brand px-6 py-3 text-lg font-bold text-white">Try again</button>
    </main>
  );
}
