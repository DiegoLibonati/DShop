import React, { useEffect, useRef, useState } from "react";

import { GalleryClothesProps } from "@src/entities/props";

import { SliderSnapX } from "@src/components/core/Sliders/SliderSnapX/SliderSnapX";
import { ItemClothes } from "@src/components/composed/Items/ItemClothes/ItemClothes";

import { getIdsByLength } from "shared_core/SharedCore";

import "@src/components/composed/Galleries/GalleryClothes/GalleryClothes.css";

export const GalleryClothes = ({
  title,
  clothes,
  className,
  onClothesClick,
}: GalleryClothesProps) => {
  const [idsClothesMobile, setIdsClothesMobile] = useState<string[]>([]);
  const [idsClothesDesktop, setIdsClothesDesktop] = useState<string[]>([]);

  const idClothesSlider = useRef<string[]>(getIdsByLength(1));

  const clearIdsRoot = () => {
    setIdsClothesMobile([]);
    setIdsClothesDesktop([]);
  };

  const onClothesChange = () => {
    if (clothes?.length === 0 || !clothes) return;

    if (idsClothesMobile.length > 0 || idsClothesDesktop.length > 0) {
      clearIdsRoot();
    }

    setIdsClothesMobile(getIdsByLength(clothes!.length));
    setIdsClothesDesktop(getIdsByLength(clothes!.length));
  };

  useEffect(onClothesChange, [clothes]);

  return (
    <div className={`gallery-clothes ${className}`}>
      <h2 className="gallery-clothes__title">{title}</h2>

      {idClothesSlider.current.length > 0 && (
        <SliderSnapX
          idRoot={idClothesSlider.current[0]}
          className="gallery-clothes__slider"
          classNameWrapper="gallery-clothes__slider-wrapper"
        >
          {idsClothesMobile.length > 0 &&
            clothes?.map((c, i) => {
              return (
                <ItemClothes
                  key={idsClothesMobile[i]}
                  idRoot={idsClothesMobile[i]}
                  src={c.src}
                  discount={c.discount}
                  name={c.name}
                  price={c.price}
                  rate={c.rate}
                  onClick={() => onClothesClick(c)}
                ></ItemClothes>
              );
            })}
        </SliderSnapX>
      )}

      <div className="gallery-clothes__clothes">
        {idsClothesDesktop.length > 0 &&
          clothes?.slice(0, 4)?.map((c, i) => {
            return (
              <ItemClothes
                key={idsClothesDesktop[i]}
                idRoot={idsClothesDesktop[i]}
                src={c.src}
                discount={c.discount}
                name={c.name}
                price={c.price}
                rate={c.rate}
                onClick={() => onClothesClick(c)}
              ></ItemClothes>
            );
          })}
      </div>
    </div>
  );
};
