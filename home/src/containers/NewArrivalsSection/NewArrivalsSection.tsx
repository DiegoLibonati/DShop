import React, { use, useEffect, useRef, useState } from "react";

import { Clothes } from "@src/entities/entities";

import { SliderSnapX } from "@src/components/Sliders/SliderSnapX/SliderSnapX";
import { ItemClothes } from "@src/components/Items/ItemClothes/ItemClothes";

import { GallerySectionLayout } from "@src/layouts/GallerySectionLayout/GallerySectionLayout";

import { lang } from "@src/constants/lang";
import { clothesList } from "@src/constants/clothes";

import { getIdsByLength } from "shared_utils/SharedUtils";

import "@src/containers/NewArrivalsSection/NewArrivalsSection.css";

export const NewArrivalsSection = () => {
  const [newArrivals, setNewArrivals] = useState<Clothes[] | null>(null);

  const [idsClothesMobile, setIdsClothesMobile] = useState<string[]>([]);
  const [idsClothesDesktop, setIdsClothesDesktop] = useState<string[]>([]);

  const idArrivalSlider = useRef<string[]>(getIdsByLength(1));

  const handleClickViewAll = () => {
    console.log("View All New Arrivals");
  };

  const clearIdsRoot = () => {
    setIdsClothesMobile([]);
    setIdsClothesDesktop([]);
  };

  const onInit = () => {
    setNewArrivals(clothesList);
  };

  const onNewArrivalsChange = () => {
    if (newArrivals?.length === 0 || !newArrivals) return;

    if (idsClothesMobile.length > 0 || idsClothesDesktop.length > 0) {
      clearIdsRoot();
    }

    setIdsClothesMobile(getIdsByLength(newArrivals!.length));
    setIdsClothesDesktop(getIdsByLength(newArrivals!.length));
  };

  useEffect(onInit, []);
  useEffect(onNewArrivalsChange, [newArrivals]);

  return (
    <GallerySectionLayout
      title={lang["en"].new_arrivals.title}
      btnText={lang["en"].new_arrivals.button_view_all}
      onClick={handleClickViewAll}
    >
      {idArrivalSlider.current.length > 0 && (
        <SliderSnapX
          idRoot={idArrivalSlider.current[0]}
          className="new-arrivals__slider"
        >
          {idsClothesMobile.length > 0 &&
            newArrivals?.map((c, i) => {
              return (
                <ItemClothes
                  key={idsClothesMobile[i]}
                  idRoot={idsClothesMobile[i]}
                  src={c.src}
                  discount={c.discount}
                  name={c.name}
                  price={c.price}
                  rate={c.rate}
                ></ItemClothes>
              );
            })}
        </SliderSnapX>
      )}

      <article className="new-arrivals__clothes">
        {idsClothesDesktop.length > 0 &&
          newArrivals?.slice(0, 4)?.map((c, i) => {
            return (
              <ItemClothes
                key={idsClothesDesktop[i]}
                idRoot={idsClothesDesktop[i]}
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
