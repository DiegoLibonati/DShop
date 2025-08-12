import React, { useRef } from "react";

import { ItemClothesProps } from "@src/entities/props";

import { ImageWithBackgroundColor } from "@src/components/core/Images/ImageWithBackgroundColor/ImageWithBackgroundColor";
import { InformationItemClothes } from "@src/components/core/Informations/InformationItemClothes/InformationItemClothes";

import { getIdsByLength } from "shared_core/SharedCore";

import "@src/components/composed/Items/ItemClothes/ItemClothes.css";

export const ItemClothes = ({
  src,
  name,
  discount,
  price,
  rate,
  language,
  onClick,
}: ItemClothesProps) => {
  const rootIds = useRef<string[]>(getIdsByLength(2));

  return (
    <div
      className={`item-clothes ${onClick && "item-clothes--pointer"}`}
      onClick={onClick}
    >
      <ImageWithBackgroundColor
        idRoot={rootIds.current[0]}
        className="item-clothes__wrapper-img"
        src={src}
        alt={name}
        bgColor="#f0eeed"
        language={language}
      ></ImageWithBackgroundColor>

      <InformationItemClothes
        idRoot={rootIds.current[1]}
        className="item-clothes__information"
        discount={discount}
        name={name}
        price={price}
        rate={rate}
        language={language}
      ></InformationItemClothes>
    </div>
  );
};
