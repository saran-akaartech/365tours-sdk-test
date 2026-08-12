import type { MetadataRoute } from "next";
import { destinations } from "@/lib/destinations";
import { indiaStateDetails } from "@/lib/india-states";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const destinationRoutes: MetadataRoute.Sitemap = destinations.map((d) => ({
    url: `${SITE_URL}/destination/${d.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  const indiaStateRoutes: MetadataRoute.Sitemap = Object.values(indiaStateDetails).map((s) => ({
    url: `${SITE_URL}/india/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/india`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...indiaStateRoutes,
    ...destinationRoutes,
    { url: `${SITE_URL}/about-us`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/csr`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/terms-of-use`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/cookie-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
