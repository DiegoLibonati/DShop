import type { Product } from "shared-core/sdk";

import { buildProductSeo } from "@container/helpers/buildProductSeo";

import { SITE_URL } from "@container/constants/vars";

const makeProduct = (overrides: Partial<Product> = {}): Product => ({
  id: "1",
  name: "Blue Shirt",
  description: "A comfortable blue shirt.",
  price: 50,
  discount: 20,
  rate: 4,
  images: [{ id: "img-1", src: "https://example.com/blue-1.png", alt: "Blue Shirt" }],
  colors: [{ id: "col-1", color: "Red" }],
  sizes: [{ id: "size-1", size: "Small" }],
  reviews: [],
  ...overrides,
});

describe("buildProductSeo", () => {
  describe("when the product is not loaded", () => {
    it("should return the fallback tags using the route id for the path", () => {
      const seo = buildProductSeo("5", null);

      expect(seo).toEqual({
        title: "Product — DShop",
        description: "Browse product details on DShop, a fashion & clothing micro-frontend demo.",
        path: "/product/5",
      });
    });

    it("should not attach structured data in the fallback", () => {
      expect(buildProductSeo("5", null)).not.toHaveProperty("jsonLd");
    });

    it("should degrade to an empty product path when neither product nor id are present", () => {
      expect(buildProductSeo(undefined, null).path).toBe("/product/");
    });
  });

  describe("when the product could not be resolved", () => {
    it("should mark the page noindex and drop the canonical path", () => {
      const seo = buildProductSeo("5", null, true);

      expect(seo).toEqual({
        title: "Product not found — DShop",
        description: "This product is not available on DShop.",
        noindex: true,
      });
    });

    it("should not attach structured data", () => {
      expect(buildProductSeo("5", null, true)).not.toHaveProperty("jsonLd");
    });

    it("should stay indexable while the request is still in flight", () => {
      expect(buildProductSeo("5", null, false)).not.toHaveProperty("noindex");
    });
  });

  describe("when the product is loaded", () => {
    it("should build the title and prefer the product id over the route id for the path", () => {
      const seo = buildProductSeo("999", makeProduct({ id: "1" }));

      expect(seo.title).toBe("Blue Shirt — DShop");
      expect(seo.path).toBe("/product/1");
    });

    it("should use the product description as the meta description", () => {
      expect(buildProductSeo("1", makeProduct()).description).toBe("A comfortable blue shirt.");
    });

    it("should truncate the meta description to 155 characters", () => {
      const seo = buildProductSeo("1", makeProduct({ description: "x".repeat(200) }));

      expect(seo.description).toHaveLength(155);
    });

    it("should fall back to a generated description when the product has none", () => {
      expect(buildProductSeo("1", makeProduct({ description: "" })).description).toBe(
        "Buy Blue Shirt at DShop."
      );
    });
  });

  describe("structured data (JSON-LD)", () => {
    it("should emit a Product schema with an absolute offer url and the untruncated description", () => {
      const seo = buildProductSeo("1", makeProduct({ description: "x".repeat(200) }));

      expect(seo.jsonLd).toMatchObject({
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Blue Shirt",
        description: "x".repeat(200),
        image: ["https://example.com/blue-1.png"],
        offers: {
          "@type": "Offer",
          url: `${SITE_URL}/product/1`,
          price: 50,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      });
    });

    it("should omit the image field when the product has no images", () => {
      const seo = buildProductSeo("1", makeProduct({ images: [] }));

      expect(seo.jsonLd).not.toHaveProperty("image");
    });

    it("should not mark up aggregateRating or review (randomized demo data)", () => {
      const seo = buildProductSeo("1", makeProduct());

      expect(seo.jsonLd).not.toHaveProperty("aggregateRating");
      expect(seo.jsonLd).not.toHaveProperty("review");
    });
  });
});
