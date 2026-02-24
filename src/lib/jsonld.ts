import type { Product } from "./products";

function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Goyo Studio",
    url: "https://goyostudio.io",
    logo: "https://goyostudio.io/logo.png",
    email: "goyo.studio.ai@gmail.com",
    description: "Building minimal software. Simplifying, refining — steadily.",
  };
}

export function breadcrumbJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://goyostudio.io",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://goyostudio.io/#projects",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `https://goyostudio.io/products/${product.slug}`,
      },
    ],
  };
}

export function softwareApplicationJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    description: product.description || product.subtitle,
    url: `https://goyostudio.io/products/${product.slug}`,
    applicationCategory: "UtilitiesApplication",
    ...(product.capturePath && {
      screenshot: `https://goyostudio.io${product.capturePath}`,
    }),
    author: {
      "@type": "Organization",
      name: "Goyo Studio",
    },
  };
}

export function howToJsonLd(product: Product) {
  if (product.happyCaseSteps.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to use ${product.name}`,
    description: product.subtitle,
    step: product.happyCaseSteps.map((text, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text,
    })),
  };
}

export function videoObjectJsonLd(product: Product) {
  const videoId = getYouTubeId(product.videoUrl);
  if (!videoId) return null;

  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: `${product.name} Demo`,
    description: product.subtitle,
    thumbnailUrl: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    embedUrl: `https://www.youtube.com/embed/${videoId}`,
    uploadDate: product.date,
  };
}
