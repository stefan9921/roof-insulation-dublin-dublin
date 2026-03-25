import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://roof-insulation-dublin-dublin.vercel.app";
  const now = new Date().toISOString();
  return [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/services/attic-insulation`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/roof-insulation`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/spray-foam-insulation`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/external-wall-insulation`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/cavity-wall-insulation`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/home-insulation`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/areas/drogheda`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/areas/swords`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/areas/bray`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/areas/navan`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/areas/mullingar`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
