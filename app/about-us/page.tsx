import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | 365 Tours",
  description:
    "365 Tours designs private, customised journeys across 7 continents, 100 countries and 1500+ destinations — based in Chennai, India.",
  alternates: { canonical: "/about-us" },
  robots: { index: true, follow: true },
};

export default function AboutUsPage() {
  return (
    <>
      <main>
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-[25px] lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-500">About Us</p>
          <h1 className="mt-3 font-serif text-2xl font-bold text-stone-900 sm:text-3xl">
            Discover the world through us
          </h1>

          <div className="mt-8 space-y-6 text-stone-600 leading-relaxed">
            <p>
              At 365 Tours, we believe that travel is more than reaching a destination — it&apos;s
              about creating unforgettable experiences, embracing new cultures, and making memories
              that last a lifetime. As a trusted travel partner, we are passionate about turning
              your travel dreams into extraordinary journeys.
            </p>
            <p>
              From relaxing beach escapes and thrilling adventures to luxury holidays, family
              vacations, corporate travel, and customised tour packages — with a dedicated team of
              travel experts, strong global partnerships, and a commitment to excellence, we deliver
              exceptional service, competitive pricing, and personalised attention at every step of
              your journey. Whether you&apos;re exploring your dream destination, planning a business
              trip, or embarking on a once-in-a-lifetime adventure, we&apos;re here to make every
              moment effortless, exciting, and unforgettable.
            </p>
            <p>
              Our mission is to inspire people to explore the world with confidence by delivering
              outstanding service, personalised travel experiences, and exceptional value. As we
              continue to grow, we remain committed to building lasting relationships with our
              clients through integrity, transparency, and a passion for creating unforgettable
              journeys.
            </p>
            <p className="font-serif text-xl italic text-stone-800">
              Your journey begins here. Explore more, travel smarter, and create memories that will
              stay with you forever.
            </p>
          </div>

          {/* Founder name — its own centered section */}
          <div className="mt-4 text-center">
            <p className="text-lg font-semibold text-stone-900">Jai Shankar</p>
            <p className="text-sm text-stone-500">Founder</p>
          </div>

          {/* Founder */}
          <div className="mt-4 space-y-5 text-stone-600 leading-relaxed">
            <p>
              Driven by an unwavering passion for travel and exploration, Jai has journeyed across
              the globe, experiencing diverse cultures, breathtaking landscapes, and unforgettable
              destinations firsthand. Every adventure has deepened a profound understanding of what
              makes a journey truly extraordinary — not just the places visited, but the stories
              created and memories cherished along the way.
            </p>
            <p>
              Inspired by these experiences, 365 Tours was established in 2007, with a clear
              vision: to transform ordinary vacations into exceptional travel experiences. Having
              explored destinations across continents, we bring authentic local insights, carefully
              curated itineraries, and a keen eye for unique experiences that go beyond traditional
              sightseeing.
            </p>
            <p>
              With a commitment to excellence, personalised service, and attention to every detail,
              Jai believes that travel has the power to inspire, connect people, and broaden
              perspectives. This philosophy continues to shape every journey we design, ensuring
              each traveller enjoys seamless planning, meaningful experiences, and memories that
              last a lifetime.
            </p>
          </div>

          {/* Founder photos — same height, each keeps its own aspect ratio */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:h-64">
            <div className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl shadow-sm sm:h-full sm:w-auto">
              <Image
                src="/about/jai-portrait.jpg"
                alt="Jai Shankar — Founder, 365 Tours"
                fill
                sizes="(max-width: 640px) 100vw, 300px"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-sm sm:h-full sm:w-auto">
              <Image
                src="/about/jai-egypt.jpg"
                alt="Jai Shankar at the pyramids of Giza, Egypt"
                fill
                sizes="(max-width: 640px) 100vw, 300px"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-sm sm:h-full sm:w-auto">
              <Image
                src="/about/jai-srilanka.jpg"
                alt="Jai Shankar on the coast of Sri Lanka"
                fill
                sizes="(max-width: 640px) 100vw, 300px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Social responsibility */}
          <div className="mt-6 rounded-3xl bg-gradient-to-br from-brand-50 to-amber-50 p-8 sm:p-10">
            <h2 className="font-serif text-2xl font-bold text-stone-900 sm:text-3xl">
              Our Social Responsibility
            </h2>
            <p className="mt-3 text-stone-600">
              A part of the profit from every booking is allocated towards giving back.
            </p>
            <Link
              href="/csr"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              Our CSR Initiatives
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </Link>
          </div>

          <div className="pt-10">
            <Link href="/" className="text-sm font-semibold text-brand-600 hover:underline">
              ← Back to homepage
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
