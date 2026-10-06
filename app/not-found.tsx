import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function NotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="text-4xl font-black text-white">Page not found</h1>
        <p className="mt-4 text-slate-300">That page doesn&apos;t exist or has moved. Head back to the camera comparison.</p>
        <Link href="/" className="mt-8 inline-flex min-h-[48px] items-center rounded-lg bg-brand px-6 py-3 text-lg font-bold text-white hover:bg-brand-dark">Back to PrimeGearLab</Link>
      </main>
      <Footer />
    </>
  );
}
