import React, { useEffect, useState } from "react";

import { Clothes } from "@src/entities/entities";

import { SliderSnapX } from "@src/components/Sliders/SliderSnapX/SliderSnapX";
import { ItemClothes } from "@src/components/Items/ItemClothes/ItemClothes";

import { GallerySectionLayout } from "@src/layouts/GallerySectionLayout/GallerySectionLayout";

import { lang } from "@src/constants/lang";
import { clothesList } from "@src/constants/clothes";

import "@src/containers/NewArrivalsSection/NewArrivalsSection.css";

export const NewArrivalsSection = () => {
  const [newArrivals, setNewArrivals] = useState<Clothes[] | null>(null);

  const handleClickViewAll = () => {
    console.log("View All New Arrivals");
  };

  const onInit = () => {
    setNewArrivals(clothesList);
  };

  useEffect(onInit, []);

  return (
    <GallerySectionLayout
      title={lang["en"].new_arrivals.title}
      btnText={lang["en"].new_arrivals.button_view_all}
      onClick={handleClickViewAll}
    >
      <SliderSnapX
        idRoot={"new-arrivals__slider"}
        className="new-arrivals__slider"
      >
        {newArrivals?.map((c, i) => {
          const index = i + 1;

          return (
            <ItemClothes
              key={`new-arrivals-item_clothes_${c.name}-${index}`}
              idRoot={`new-arrivals-item_clothes_${c.name}-${index}`}
              src={c.src}
              discount={c.discount}
              name={c.name}
              price={c.price}
              rate={c.rate}
            ></ItemClothes>
          );
        })}
      </SliderSnapX>

      <article className="new-arrivals__clothes">
        {newArrivals?.slice(0, 4)?.map((c, i) => {
          const index = i + 1;

          return (
            <ItemClothes
              key={`new-arrivals-item_clothes_${c.name}-${index * 100}`}
              idRoot={`new-arrivals-item_clothes_${c.name}-${index * 100}`}
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
