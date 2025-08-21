import React, { useEffect, useRef, useState } from "react";

import { SliderSnapX } from "@src/components/core/Sliders/SliderSnapX/SliderSnapX";
import { ItemClothes } from "@src/components/core/Items/ItemClothes/ItemClothes";

import { GallerySectionLayout } from "@src/layouts/GallerySectionLayout/GallerySectionLayout";

import { useNewArrivalsContext } from "@src/contexts/NewArrivals/NewArrivalsContext";

import { lang } from "@src/constants/lang";
import { clothesList } from "@src/constants/clothes";

import { getIdsByLength } from "shared_core/SharedCore";

import "@src/containers/NewArrivalsSection/NewArrivalsSection.css";

export const NewArrivalsSection = () => {
  const [idsClothesMobile, setIdsClothesMobile] = useState<string[]>([]);
  const [idsClothesDesktop, setIdsClothesDesktop] = useState<string[]>([]);

  const idArrivalSlider = useRef<string[]>(getIdsByLength(1));

  const { newArrivals, handleSetNewArrivals } = useNewArrivalsContext();

  const handleClickViewAll = () => {
    console.log("View All New Arrivals");
  };

  const clearIdsRoot = () => {
    setIdsClothesMobile([]);
    setIdsClothesDesktop([]);
  };

  const onInit = () => {
    handleSetNewArrivals(clothesList);
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
      className="new-arrivals"
    >
      {idArrivalSlider.current.length > 0 && (
        <SliderSnapX
          idRoot={idArrivalSlider.current[0]}
          className="new-arrivals__slider"
          classNameWrapper="new-arrivals__slider-wrapper"
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
