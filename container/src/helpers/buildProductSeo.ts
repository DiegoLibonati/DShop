import type { Product } from "shared-core/sdk";
import type { SeoProps } from "@container/types/props";

import { SITE_URL } from "@container/constants/vars";

export const buildProductSeo = (id: string | undefined, product: Product | null): SeoProps => {
  const path = `/product/${product?.id ?? id ?? ""}`;

  if (!product) {
    return {
      title: "Product — DShop",
      description: "Browse product details on DShop, a fashion & clothing micro-frontend demo.",
      path,
    };
  }

  const image = product.images[0]?.src;
  const description = product.description
    ? product.description.slice(0, 155).trim()
    : `Buy ${product.name} at DShop.`;

  return {
    title: `${product.name} — DShop`,
    description,
    path,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      description: product.description,
      ...(image ? { image: [image] } : {}),
      offers: {
        "@type": "Offer",
        url: `${SITE_URL}${path}`,
        price: product.price,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
  };
};
