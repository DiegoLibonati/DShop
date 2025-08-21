import React, { useEffect, useRef, useState } from "react";

import { SliderSnapX } from "@src/components/core/Sliders/SliderSnapX/SliderSnapX";
import { ItemClothes } from "@src/components/core/Items/ItemClothes/ItemClothes";

import { GallerySectionLayout } from "@src/layouts/GallerySectionLayout/GallerySectionLayout";

import { useTopSellingsContext } from "@src/contexts/TopSellings/TopSellingsContext";

import { lang } from "@src/constants/lang";
import { clothesList } from "@src/constants/clothes";

import { getIdsByLength } from "shared_core/SharedCore";

import "@src/containers/TopSellingSection/TopSellingSection.css";

export const TopSellingSection = () => {
  const [idsClothesMobile, setIdsClothesMobile] = useState<string[]>([]);
  const [idsClothesDesktop, setIdsClothesDesktop] = useState<string[]>([]);

  const idTopSellingSlider = useRef<string[]>(getIdsByLength(1));

  const { topSellings, handleSetTopSellings } = useTopSellingsContext();

  const handleClickViewAll = () => {
    console.log("View All Top Sellings");
  };

  const clearIdsRoot = () => {
    setIdsClothesMobile([]);
    setIdsClothesDesktop([]);
  };

  const onInit = () => {
    handleSetTopSellings(clothesList);
  };

  const onTopSellingsChange = () => {
    if (topSellings?.length === 0 || !topSellings) return;

    if (idsClothesMobile.length > 0 || idsClothesDesktop.length > 0) {
      clearIdsRoot();
    }

    setIdsClothesMobile(getIdsByLength(topSellings!.length));
    setIdsClothesDesktop(getIdsByLength(topSellings!.length));
  };

  useEffect(onInit, []);
  useEffect(onTopSellingsChange, [topSellings]);

  return (
    <GallerySectionLayout
      title={lang["en"].top_selling.title}
      btnText={lang["en"].top_selling.button_view_all}
      onClick={handleClickViewAll}
      className="top-sellings"
    >
      {idTopSellingSlider.current.length > 0 && (
        <SliderSnapX
          idRoot={idTopSellingSlider.current[0]}
          className="top-sellings__slider"
          classNameWrapper="top-sellings__slider-wrapper"
        >
          {idsClothesMobile.length > 0 &&
            topSellings?.map((c, i) => {
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

      <article className="top-sellings__clothes">
        {idsClothesDesktop.length > 0 &&
          topSellings?.slice(0, 4)?.map((c, i) => {
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
