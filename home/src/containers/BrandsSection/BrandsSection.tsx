import React, { useEffect } from "react";

import { useBrandsContext } from "@src/contexts/Brands/BrandsContext";

import "@src/containers/BrandsSection/BrandsSection.css";

// NOTE: This can be a array of imgs.

export const BrandsSection = () => {
  const { brands, handleSetBrands } = useBrandsContext();

  const onInit = () => {
    const brands = ["VERSACE", "ZARA", "GUCCI", "PRADA", "Calvin Klein"];

    handleSetBrands(brands);
  };

  useEffect(onInit, []);

  return (
    <section className="brands">
      {brands &&
        brands.map((brand) => {
          return (
            <article key={`brand_${brand}`} className="brands-brand">
              <h2 className="brands-brand__text">{brand}</h2>
            </article>
          );
        })}
    </section>
  );
};
