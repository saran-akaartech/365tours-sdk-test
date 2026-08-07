"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";

// The 5 homepage hero photos + nicknames, supplied directly (docs/Home-page-Main Section/).
const heroSlides: { name: string; tagline: string; image: string }[] = [
  { name: "Bhutan", tagline: "The Land of the Thunder Dragon", image: "/hero/bhutan.jpg" },
  { name: "Cambodia", tagline: "The Land of the Khmer", image: "/hero/cambodia.jpg" },
  { name: "Egypt", tagline: "Gift of the Nile", image: "/hero/egypt.jpg" },
  { name: "Indonesia", tagline: "The Emerald of the Equator", image: "/hero/indonesia.jpg" },
  { name: "Kenya", tagline: "The Pride of Africa", image: "/hero/kenya.jpg" },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  // Only the current slide + the next one up are mounted, so the homepage still
  // loads just ONE hero image (the LCP) up front, but the *next* slide always
  // gets a full interval's head start to fetch/decode before it's revealed —
  // otherwise its <Image> hasn't painted yet when it becomes active, and the
  // section's own hero-shimmer background (a dark teal, #132f33) flashes
  // through for a moment.
  const [loaded, setLoaded] = useState<number[]>(() =>
    heroSlides.length > 1 ? [0, 1] : [0]
  );
  const markLoaded = (i: number) => setLoaded((l) => (l.includes(i) ? l : [...l, i]));

  const go = (i: number) => {
    setActive(i);
    markLoaded(i);
    markLoaded((i + 1) % heroSlides.length);
  };
  const next = () => go((active + 1) % heroSlides.length);

  useEffect(() => {
    if (heroSlides.length < 2) return;
    const id = setInterval(() => {
      setActive((i) => {
        const nextIndex = (i + 1) % heroSlides.length;
        markLoaded(nextIndex);
        markLoaded((nextIndex + 1) % heroSlides.length);
        return nextIndex;
      });
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero-shimmer relative min-h-screen overflow-hidden">
      {/* Rotating real-photo background layers (progressively mounted) */}
      {heroSlides.map((slide, i) =>
        loaded.includes(i) ? (
          <Image
            key={slide.image}
            src={slide.image}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
            style={{ opacity: i === active ? 1 : 0 }}
            aria-hidden={i !== active ? true : undefined}
          />
        ) : null
      )}
      {/* Content */}
      <div className="relative flex min-h-screen flex-col">
        {/* Spacer for navbar */}
        <div className="h-40 sm:h-44" />

        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pb-14 pt-4 lg:px-10">
          {/* No scrim over the photo anymore — legibility comes from a drop
              shadow on the text itself instead of darkening the image. */}
          <div className="max-w-4xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
            {/* Prominent tagline */}
            <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-amber-300/40 bg-amber-400/15 px-5 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-amber-200 sm:text-base">
                Private &amp; Customised Tours
              </span>
            </div>

            {/* Main heading */}
            <h1 className="font-serif text-[36px] font-bold leading-[1.05] text-white sm:text-[45px] lg:text-[54px]">
              Explore.
              <br />
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Experience.
              </span>{" "}
              Evolve.
            </h1>

            {/* Prominent reach line */}
            <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1 font-serif text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              <span><span className="text-amber-300">7</span> Continents</span>
              <span className="text-white/30">·</span>
              <span><span className="text-amber-300">100</span> Countries</span>
              <span className="text-white/30">·</span>
              <span><span className="text-amber-300">1,500+</span> Destinations</span>
            </div>

            {/* Destination caption + slide dots */}
            {heroSlides.length > 0 && (
              <div className="mt-7 flex items-center gap-4">
                <span className="text-sm text-white/70">
                  <span className="font-semibold text-white">{heroSlides[active].name}</span>
                  {" — "}
                  {heroSlides[active].tagline}
                </span>
                <div className="flex gap-1.5">
                  {heroSlides.map((s, i) => (
                    <button
                      key={s.image}
                      onClick={() => go(i)}
                      aria-label={`Show ${s.name}`}
                      className="flex h-6 w-6 items-center justify-center"
                    >
                      <span
                        className={`block h-1.5 rounded-full transition-all ${
                          i === active ? "w-6 bg-amber-400" : "w-1.5 bg-white/50 hover:bg-white/80"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Social media — its own row at the very bottom of the hero, in normal
            flow (not absolutely positioned) so it can never overlap the
            vertically-centred caption/carousel controls above it. */}
        <div className="mx-auto w-full max-w-7xl px-6 pb-10 lg:px-10">
          <SocialLinks />
        </div>

        {/* Carousel arrow (step forward through destinations manually) */}
        {heroSlides.length > 1 && (
          <button
            onClick={next}
            aria-label="Next destination"
            className="absolute right-2 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition hover:bg-white/25 active:scale-90 sm:right-4 sm:h-12 sm:w-12"
          >
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
}
