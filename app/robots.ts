import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const site = (process.env.SITE_URL || "https://seonaia.com.br").replace(/\/$/, "");
  return {
    rules: [{ userAgent: "*", allow: ["/", "/guia/", "/privacidade", "/termos"], disallow: ["/p/", "/api/", "/login", "/primeiro-acesso"] }],
    sitemap: site + "/sitemap.xml",
  };
}
