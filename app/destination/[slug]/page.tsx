import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import HeroImage from "@/components/HeroImage";
import ItineraryCarousel from "@/components/ItineraryCarousel";
import QuickEnquiryCTA from "@/components/QuickEnquiryCTA";
import DestinationsOffered from "@/components/DestinationsOffered";
import TourGuarantee from "@/components/TourGuarantee";
import Testimonials from "@/components/Testimonials";
import TwelveReasons from "@/components/TwelveReasons";
import TrustBar from "@/components/TrustBar";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";
import DestinationViewTracker from "@/components/DestinationViewTracker";
import { SITE_URL, absoluteUrl } from "@/lib/site";
import { getDestinationBySlug, getAllSlugs } from "@/lib/destinations";
import { DESTINATION_REVIEWS } from "@/lib/destination-reviews";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const dest = getDestinationBySlug(params.slug);
  if (!dest) return {};
  const title = `${dest.name} Tours | 365 Tours — Private & Customised`;
  const description = dest.description.slice(0, 160);
  const path = `/destination/${dest.slug}`;
  const images = dest.heroImage
    ? [{ url: dest.heroImage, alt: `${dest.name} — 365 Tours` }]
    : undefined;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "article", title, description, url: path, images },
    twitter: { card: "summary_large_image", title, description, images: dest.heroImage ? [dest.heroImage] : undefined },
  };
}

export default function DestinationPage({ params }: { params: { slug: string } }) {
  const dest = getDestinationBySlug(params.slug);
  if (!dest) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: `${dest.name} — 365 Tours`,
    description: dest.description,
    url: `${SITE_URL}/destination/${dest.slug}`,
    image: (dest.gallery ?? []).map((g) => absoluteUrl(g)),
    touristType: dest.experiences,
    ...(dest.regions && dest.regions.length
      ? { containsPlace: dest.regions.map((r) => ({ "@type": "Place", name: r })) }
      : {}),
    provider: {
      "@type": "TravelAgency",
      name: "365 Tours",
      url: SITE_URL,
      telephone: "+91-98401-48869",
      address: {
        "@type": "PostalAddress",
        streetAddress: "37 1st Street, Singaravelan Nagar, Maduravoyal",
        addressLocality: "Chennai",
        postalCode: "600095",
        addressCountry: "IN",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DestinationViewTracker id={dest.slug} name={dest.name} category={dest.continent} />
      <main>
        {/* ── HERO ── */}
        <section className="hero-shimmer relative h-[560px] overflow-hidden sm:h-[580px] lg:h-[650px]">
          {dest.heroImage && (
            <HeroImage
              src={dest.heroImage}
              alt=""
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover object-center"
            />
          )}
          <div className="relative flex h-[560px] flex-col justify-end pb-10 pt-28 sm:h-[580px] sm:pb-14 sm:pt-32 lg:h-[650px]">
            {/* No scrim over the photo anymore — legibility comes from a drop
                shadow on the text itself instead of a haze over the image. */}
            <div className="mx-auto w-full max-w-7xl px-6 drop-shadow-[0_1px_3px_rgba(255,255,255,0.9)] lg:px-10">
              {/* Breadcrumb */}
              <nav className="mb-6 flex items-center gap-2 text-xs text-stone-500">
                <Link href="/" className="hover:text-stone-900 transition-colors">Home</Link>
                <span>/</span>
                <Link href="/#all-destinations" className="hover:text-stone-900 transition-colors">Destinations</Link>
                <span>/</span>
                <span className="text-stone-500">{dest.name}</span>
              </nav>

              {/* Continent badge */}
              <span className="inline-block rounded-full border border-stone-900/15 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-stone-700">
                {dest.continent}
              </span>

              <div className="mt-4 flex items-center gap-4">
                {dest.flag && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={dest.flag}
                    alt={`${dest.name} flag`}
                    width={56}
                    height={56}
                    decoding="async"
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-stone-900/10 shadow-lg sm:h-14 sm:w-14"
                  />
                )}
                <h1 className="font-serif text-5xl font-bold text-stone-900 sm:text-6xl lg:text-7xl">
                  {dest.name}
                </h1>
              </div>
              <p className="mt-3 text-base text-stone-600 font-light italic sm:text-lg">{dest.tagline}</p>

              <SocialLinks className="mt-8" />
            </div>
          </div>
        </section>

        {/* ── BRIEF DESCRIPTION (itineraries come right after this) ── */}
        <section className="bg-white pt-10 pb-0 -mb-1">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <p className="font-merri text-lg italic leading-relaxed text-stone-700 sm:text-xl">
              {dest.description}
            </p>
          </div>
        </section>

        {/* ── TOUR GUARANTEE & TRANSPARENT PRICING (same as the home page) ── */}
        <TourGuarantee />

        {/* ── SIGNATURE ITINERARIES (come first, right after the intro) ── */}
        {dest.itineraries && dest.itineraries.length > 0 && (
          <section className="bg-stone-50 py-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              {/* Same brush treatment as the landing page's "100 Countries" */}
              <h2 className="-mt-3 font-brush leading-none text-stone-900 sm:-mt-5">
                <span className="text-6xl sm:text-8xl">{dest.itineraries.length}</span>{" "}
                <span className="text-3xl sm:text-5xl">Signature Itineraries</span>
              </h2>
              <p className="mt-2 font-merri text-lg italic text-stone-600 sm:text-xl">
                Well crafted based on your interest, time &amp; budget
              </p>
              <div className="mt-10">
                <ItineraryCarousel items={dest.itineraries} name={dest.name} />
              </div>
              {!DESTINATION_REVIEWS[dest.slug] && (
                <QuickEnquiryCTA name={dest.name} source="itinerary-enquiry" />
              )}
            </div>
          </section>
        )}

        {/* ── REVIEWS (docs/TestimonialsDestinations.docx) — only the 6
            destinations that document covers get their own curated set;
            every other destination page has none, so nothing renders.
            For these, the lead form is placed right after reviews instead
            of right after the itineraries. ── */}
        {DESTINATION_REVIEWS[dest.slug] && (
          <>
            <Testimonials destinationSlug={dest.slug} />
            <section className="bg-stone-50 pb-10">
              <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <QuickEnquiryCTA name={dest.name} source="itinerary-enquiry" />
              </div>
            </section>
          </>
        )}

        {/* ── DESTINATIONS OFFERED ── */}
        <DestinationsOffered name={dest.name} items={dest.regions ?? []} />

        {/* ── 12 REASONS (carried over to every destination page, as on the original site) ── */}
        <TwelveReasons />

        {/* ── INDUSTRY PROVENANCE (As Seen / Top Rated / Heritage partners) ── */}
        <TrustBar />
      </main>

      <Footer />
    </>
  );
}
