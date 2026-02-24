import type { MetadataRoute } from "next";
import { getAllProducts } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const products = getAllProducts();

  const productEntries: MetadataRoute.Sitemap = products.map((p) => ({
    url: `https://goyostudio.io/products/${p.slug}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  return [
    {
      url: "https://goyostudio.io",
      lastModified: new Date(),
      priority: 1.0,
    },
    ...productEntries,
  ];
}
