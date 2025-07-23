import React, { useEffect, useState } from "react";

import { Clothes } from "@src/entities/entities";

import { SliderSnapX } from "@src/components/Sliders/SliderSnapX/SliderSnapX";
import { ItemClothes } from "@src/components/Items/ItemClothes/ItemClothes";

import { GallerySectionLayout } from "@src/layouts/GallerySectionLayout/GallerySectionLayout";

import { lang } from "@src/constants/lang";
import { clothesList } from "@src/constants/clothes";

import "@src/containers/TopSellingSection/TopSellingSection.css";

export const TopSellingSection = () => {
  const [topSellings, setTopSellings] = useState<Clothes[] | null>(null);

  const handleClickViewAll = () => {
    console.log("View All Top Sellings");
  };

  const onInit = () => {
    setTopSellings(clothesList);
  };

  useEffect(onInit, []);

  return (
    <GallerySectionLayout
      title={lang["en"].top_selling.title}
      btnText={lang["en"].top_selling.button_view_all}
      onClick={handleClickViewAll}
    >
      <SliderSnapX
        idRoot="top-sellings__slider"
        className="top-sellings__slider"
      >
        {topSellings?.map((c, i) => {
          const index = i + 1;

          return (
            <ItemClothes
              key={`top-sellings-item_clothes_${c.name}-${index}`}
              idRoot={`top-sellings-item_clothes_${c.name}-${index}`}
              src={c.src}
              discount={c.discount}
              name={c.name}
              price={c.price}
              rate={c.rate}
            ></ItemClothes>
          );
        })}
      </SliderSnapX>

      <article className="top-sellings__clothes">
        {topSellings?.slice(0, 4)?.map((c, i) => {
          const index = i + 1;

          return (
            <ItemClothes
              key={`top-sellings-item_clothes_${c.name}-${index * 100}`}
              idRoot={`top-sellings-item_clothes_${c.name}-${index * 100}`}
              src={c.src}
              discount={c.discount}
              name={c.name}
              price={c.price}
              rate={c.rate}
            ></ItemClothes>
          );
        })}
      </article>
    </GallerySectionLayout>
  );
};
