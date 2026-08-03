"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Real photos from the live 365tours.in/India hero carousel.
const slides = [
  { name: "Jaipur", image: "/india/hero/jaipur-hawa-mahal.jpg" },
  { name: "Agra", image: "/india/hero/taj-mahal.jpg" },
  { name: "Amritsar", image: "/india/hero/golden-temple.jpg" },
  { name: "Kerala", image: "/india/hero/kerala-backwaters.jpg" },
  { name: "Mysuru", image: "/india/hero/mysore-palace.jpg" },
  { name: "Udaipur", image: "/india/hero/udaipur-palace.jpg" },
];

export default function IndiaHeroBackground() {
  const [active, setActive] = useState(0);
  // The next slide always gets a full interval's head start to fetch/decode
  // before it's revealed — otherwise its <Image> hasn't painted yet when it
  // becomes active, and the section's own hero-shimmer background (a dark
  // teal, #132f33) flashes through for a moment.
  const [loaded, setLoaded] = useState<number[]>(() => (slides.length > 1 ? [0, 1] : [0]));
  const markLoaded = (i: number) => setLoaded((l) => (l.includes(i) ? l : [...l, i]));

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => {
        const nextIndex = (i + 1) % slides.length;
        markLoaded(nextIndex);
        markLoaded((nextIndex + 1) % slides.length);
        return nextIndex;
      });
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {slides.map((slide, i) =>
        loaded.includes(i) ? (
          <Image
            key={slide.image}
            src={slide.image}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover object-top"
            style={{ opacity: i === active ? 1 : 0 }}
            aria-hidden={i !== active ? true : undefined}
          />
        ) : null
      )}
    </>
  );
}
