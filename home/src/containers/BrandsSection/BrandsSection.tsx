import React, { useEffect, useState } from "react";

import "@src/containers/BrandsSection/BrandsSection.css";

// NOTE: This can be a array of imgs.

export const BrandsSection = () => {
  const [brands, setBrands] = useState<string[]>([]);

  const onInit = () => {
    const brands = ["VERSACE", "ZARA", "GUCCI", "PRADA", "Calvin Klein"];

    setBrands(brands);
  };

  useEffect(onInit, []);

  return (
    <section className="brands">
      {brands.map((brand) => {
        return (
          <article key={`brand_${brand}`} className="brands-brand">
            <h2 className="brands-brand__text">{brand}</h2>
          </article>
        );
      })}
    </section>
  );
};
