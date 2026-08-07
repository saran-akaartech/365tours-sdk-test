"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { analyticsEnabled } from "@/lib/analytics";

export const COOKIE_CONSENT_KEY = "365tours_cookie_consent";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only ask for consent when we actually set marketing/analytics cookies
    // (i.e. a Google Ads / Analytics ID is configured). No marketing cookies → no banner.
    if (!analyticsEnabled) return;
    try {
      if (localStorage.getItem(COOKIE_CONSENT_KEY)) return;
    } catch {
      return;
    }

    // Non-intrusive: never on first paint (would sit over the hero image).
    // Reveal on the visitor's first scroll, or after 5s if they never scroll —
    // whichever comes first.
    let revealed = false;
    const reveal = () => {
      if (revealed) return;
      revealed = true;
      setShow(true);
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    };
    const onScroll = () => reveal();
    const timer = setTimeout(reveal, 5000);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    };
  }, []);

  const decide = (value: "granted" | "denied") => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, value);
    } catch {
      /* ignore */
    }
    setShow(false);
    window.dispatchEvent(new CustomEvent("cookie-consent", { detail: value }));
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[60] mx-auto flex max-w-xl flex-wrap items-center gap-x-4 gap-y-2 rounded-full border border-stone-200 bg-white/95 px-5 py-2.5 shadow-lg backdrop-blur sm:left-6 sm:right-auto">
      <p className="text-xs text-stone-600">
        We use cookies to improve your experience.{" "}
        <Link href="/cookie-policy" className="font-semibold text-brand-600 hover:underline">
          Cookie Policy
        </Link>
      </p>
      <div className="ml-auto flex shrink-0 gap-2">
        <button
          onClick={() => decide("denied")}
          className="rounded-full px-3 py-1 text-xs font-semibold text-stone-500 transition hover:bg-stone-50"
        >
          Decline
        </button>
        <button
          onClick={() => decide("granted")}
          className="rounded-full bg-brand-500 px-4 py-1 text-xs font-semibold text-white transition hover:bg-brand-600"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
