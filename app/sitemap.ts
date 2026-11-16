import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = (process.env.SITE_URL || "https://seonaia.com.br").replace(/\/$/, "");
  return [
    { url: site + "/", changeFrequency: "monthly", priority: 1 },
    { url: site + "/privacidade", changeFrequency: "yearly", priority: 0.2 },
    { url: site + "/termos", changeFrequency: "yearly", priority: 0.2 },
  ];
}
