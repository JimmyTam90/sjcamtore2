import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import ProductCard from "@/components/ProductCard";
import FAQ, { type FAQItem } from "@/components/FAQ";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { PRODUCTS } from "@/lib/products";
import { affiliateUrl, MERCHANT_POLICIES } from "@/lib/affiliate";
import { SITE } from "@/lib/site";

const hero = PRODUCTS[0];

const faqs: FAQItem[] = [
  { q: "Is PrimeGearLab the SJCAM store?", a: <>No. PrimeGearLab is an independent affiliate publisher. Our buttons take you to the merchant&apos;s website, where you check out and where its policies apply.</> },
  { q: "What does shipping to the US look like?", a: <>The merchant&apos;s site banner states US delivery in 3–5 days and free US shipping on orders over $110. Product pages estimate shipping within 1–2 business days after order confirmation. Confirm timing at checkout. See the <a className="underline underline-offset-4" href={MERCHANT_POLICIES.shipping} target="_blank" rel="noopener noreferrer">merchant shipping policy<span className="sr-only"> (opens in a new tab)</span></a>.</> },
  { q: "What is the return policy?", a: <>The merchant lists a 30-day return window with a valid proof of purchase. Opened products may carry a 15% restocking fee, buyers pay return freight if they simply change their mind, and sale items are non-refundable. Read the <a className="underline underline-offset-4" href={MERCHANT_POLICIES.returns} target="_blank" rel="noopener noreferrer">full policy<span className="sr-only"> (opens in a new tab)</span></a> before ordering.</> },
  { q: "Is there a warranty?", a: <>Each product page lists a 1-year warranty. Claims go through the merchant at support@sjcam.com. Terms are on the <a className="underline underline-offset-4" href={MERCHANT_POLICIES.warranty} target="_blank" rel="noopener noreferrer">merchant warranty page<span className="sr-only"> (opens in a new tab)</span></a>.</> },
  { q: "Which camera is best for vlogging?", a: <>The SJ10 Pro and SJ11 Active pair a 1.3&quot; front screen with a 2.33&quot; rear touch screen. The C300 has two 1.3&quot; touch screens. If you want the longest battery, the C300 with its handle battery is listed at up to 460 minutes of 4K/30 recording.</> },
  { q: "How waterproof are they?", a: <>The SJ10 Pro and SJ11 Active are listed as waterproof to 5 m without a case and 30 m with the included case. The C300 is listed at 30 m in its waterproof case. The A50 body cam is IP65: protected against dust and water jets, not submersion.</> },
  { q: "Will the prices here match the store?", a: <>Prices change and the merchant&apos;s site showed different numbers for some models, so we only show a price where the product page was consistent and label it as a snapshot. The price at checkout is the one that counts.</> },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="mx-auto grid max-w-page items-center gap-10 px-4 py-10 md:grid-cols-2 md:py-16">
          <div className="space-y-5">
            <p className="text-sm font-semibold text-brand">Independent camera comparison for US shoppers</p>
            <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl">Pick the SJCAM camera that fits how you shoot</h1>
            <p className="max-w-xl text-lg text-slate-300">Dual-screen 4K action cameras and a GPS body cam, compared on what decides the purchase: stabilization, waterproofing, battery and screens.</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton href={hero.href} product="hero">See the SJ10 Pro on SJCAM Store</CTAButton>
              <a href="#compare" className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-white/40 px-6 py-3 text-lg font-bold text-white hover:bg-white/10">Compare all four</a>
            </div>
            <p className="text-sm text-slate-400">{SITE.name} earns a commission on qualifying purchases at no extra cost to you.</p>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div aria-hidden="true" className="absolute inset-0 rotate-3 rounded-2xl bg-brand" />
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-panel">
              <Image src={hero.image} alt={hero.alt} fill priority sizes="(min-width:768px) 28rem, 92vw" className="object-contain p-6" />
            </div>
          </div>
        </section>

        {/* MERCHANT FACTS */}
        <section aria-labelledby="facts" className="border-y border-white/10 bg-panel">
          <div className="mx-auto max-w-page px-4 py-8">
            <h2 id="facts" className="sr-only">Merchant terms at a glance</h2>
            <dl className="grid gap-6 text-sm sm:grid-cols-2 lg:grid-cols-4">
              <div><dt className="font-bold text-white">US shipping</dt><dd className="text-slate-300">3–5 days stated; free over $110</dd></div>
              <div><dt className="font-bold text-white">Returns</dt><dd className="text-slate-300">30 days, conditions apply</dd></div>
              <div><dt className="font-bold text-white">Warranty</dt><dd className="text-slate-300">1 year, per product listings</dd></div>
              <div><dt className="font-bold text-white">Payment</dt><dd className="text-slate-300">Cards, PayPal, Apple Pay, Google Pay</dd></div>
            </dl>
            <p className="mt-4 text-xs text-slate-400">Source: the merchant&apos;s site at the time we checked. Terms can change; confirm at checkout.</p>
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="cameras" className="mx-auto max-w-page px-4 py-14">
          <h2 className="text-3xl font-extrabold text-white">Four cameras, four jobs</h2>
          <p className="mt-2 max-w-2xl text-slate-300">Each card uses the merchant&apos;s own spec sheet. Open one to see full specs, bundles and current pricing.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {PRODUCTS.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        </section>

        {/* COMPARE */}
        <section id="compare" className="mx-auto max-w-page px-4 pb-14">
          <h2 className="text-3xl font-extrabold text-white">Side-by-side specs</h2>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10">
            <table className="min-w-[860px] w-full text-left text-sm">
              <caption className="sr-only">Specification comparison of the SJ10 Pro, SJ11 Active, C300 and A50</caption>
              <thead className="bg-panel text-white">
                <tr>
                  {["Camera", "Video", "Stabilization", "Screens", "Waterproofing", "Stated battery life", "Weight"].map((h) => <th key={h} scope="col" className="px-4 py-3 font-bold">{h}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-slate-300">
                {PRODUCTS.map((p) => (
                  <tr key={p.id}>
                    <th scope="row" className="px-4 py-3 font-bold text-white">{p.name.replace("SJCAM ", "")}</th>
                    <td className="px-4 py-3">{p.compare.video}</td>
                    <td className="px-4 py-3">{p.compare.stabilization}</td>
                    <td className="px-4 py-3">{p.compare.screens}</td>
                    <td className="px-4 py-3">{p.compare.water}</td>
                    <td className="px-4 py-3">{p.compare.battery}</td>
                    <td className="px-4 py-3">{p.compare.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-400">Battery figures are the merchant&apos;s stated numbers under the conditions shown. Real-world runtime varies.</p>
          <div className="mt-6"><CTAButton href={affiliateUrl("/collections/action-cameras")} product="compare-collection" variant="ghost">Browse all SJCAM action cameras</CTAButton></div>
        </section>

        {/* USE CASES */}
        <section className="border-y border-white/10 bg-panel">
          <div className="mx-auto max-w-page px-4 py-14">
            <h2 className="text-3xl font-extrabold text-white">Match the camera to the shoot</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div><h3 className="text-xl font-bold text-white">Vlogging and motovlogging</h3><p className="mt-2 text-slate-300">A front screen lets you frame yourself. The SJ10 Pro and SJ11 Active have one, and the SJ10 Pro adds 4K at 60 fps. Pair them with mounts from the merchant&apos;s <a className="inline-block underline underline-offset-4 transition-transform duration-100 active:scale-95 motion-reduce:transition-none" href={affiliateUrl("/collections/accessories")} target="_blank" rel="noopener noreferrer" data-affiliate="accessories">accessories collection<span className="sr-only"> (opens in a new tab)</span></a>.</p></div>
              <div><h3 className="text-xl font-bold text-white">Water and weather</h3><p className="mt-2 text-slate-300">The SJ10 Pro and SJ11 Active go to 5 m on their own and 30 m with the included case, per the listings. Check the case seal before every dive, as the merchant&apos;s own FAQ advises.</p></div>
              <div><h3 className="text-xl font-bold text-white">Long days out</h3><p className="mt-2 text-slate-300">The C300 detaches into a 55 g pocket camera or runs on the handle battery for a stated 460 minutes. The A50 lists 300 minutes at 1080p/30.</p></div>
              <div><h3 className="text-xl font-bold text-white">Wearable and low light</h3><p className="mt-2 text-slate-300">The A50 body cam adds GPS logging, LED and infrared night vision, and an IP65 body. It is not stabilized and records 4K at 30 fps.</p></div>
            </div>
          </div>
        </section>

        {/* HONEST NOTES */}
        <section id="terms" className="mx-auto max-w-page px-4 py-14">
          <h2 className="text-3xl font-extrabold text-white">Know before you buy</h2>
          <ul className="mt-6 grid gap-4 text-slate-300 md:grid-cols-2">
            <li className="rounded-xl border border-white/10 p-5">Only the SJ10 Pro lists 4K at 60 fps. The SJ11 Active, C300 and A50 list 4K at 30 fps.</li>
            <li className="rounded-xl border border-white/10 p-5">Waterproof ratings depend on the case or body rating above. The A50&apos;s IP65 does not cover submersion.</li>
            <li className="rounded-xl border border-white/10 p-5">The C300, SJ11 Active and A50 listings state microSD cards up to 128 GB. A fast card is recommended in the merchant&apos;s FAQ.</li>
            <li className="rounded-xl border border-white/10 p-5">Return terms include a possible 15% restocking fee on opened items. Read them on the merchant site before ordering.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-3xl px-4 pb-14">
          <h2 className="mb-6 text-3xl font-extrabold text-white">Questions shoppers ask</h2>
          <FAQ items={faqs} />
        </section>

        {/* FINAL CTA */}
        <section className="bg-brand">
          <div className="mx-auto flex max-w-page flex-col items-start gap-5 px-4 py-12 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-white">Ready to check current prices?</h2>
              <p className="mt-2 max-w-xl text-white">The merchant&apos;s product pages show live pricing, bundles and stock.</p>
            </div>
            <a href={affiliateUrl("/collections/action-cameras")} target="_blank" rel="noopener noreferrer" data-affiliate="final" className="pointer-events-auto inline-flex min-h-[48px] items-center justify-center rounded-lg bg-ink px-6 py-3 text-lg font-bold text-white transition-transform duration-100 hover:bg-black active:scale-95 motion-reduce:transition-none">
              Explore the action camera collection<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
