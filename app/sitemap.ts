import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/privacy", "/terms", "/affiliate-disclosure", "/contact"];
  return routes.map((r) => ({ url: `${SITE.url}${r}`, changeFrequency: r ? "yearly" : "weekly", priority: r ? 0.3 : 1 }));
}
