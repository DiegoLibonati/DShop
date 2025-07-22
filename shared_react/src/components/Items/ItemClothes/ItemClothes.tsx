import React, { Fragment, useMemo } from "react";

import { ItemClothesProps } from "@src/entities/props";

import { RateStars } from "@src/components/Ratings/RateStars/RateStars";

import { getFinalPriceByDiscount } from "@src/helpers/getFinalPriceByDiscount";

import "@src/components/Items/ItemClothes/ItemClothes.css";

export const ItemClothes = ({
  src,
  name,
  discount,
  price,
  rate,
  onClick,
}: ItemClothesProps) => {
  const maxStars = 5;

  const finalPrice = useMemo(
    () => getFinalPriceByDiscount(price, discount),
    [discount, price]
  );

  return (
    <div
      className={`item-clothes ${onClick && "item-clothes--pointer"}`}
      onClick={onClick}
    >
      <div className="item-clothes__wrapper-img">
        <img src={src} alt={name} className="item-clothes__img"></img>
      </div>

      <div className="item-clothes__information">
        <h2 className="item-clothes__information-title" title={name}>
          {name}
        </h2>
        <div className="item-clothes__information-rating">
          <RateStars
            max={maxStars}
            value={rate}
            outColor={"#FFFFFF"}
            inColor="#FFC633"
            className="item-clothes__information-rating-star"
          ></RateStars>
          <p className="item-clothes__information-rating-rate">
            {rate}/{maxStars}
          </p>
        </div>

        <div className="item-clothes__information-price">
          <h3 className="item-clothes__information-price-final">
            ${finalPrice}
          </h3>

          {discount && (
            <Fragment>
              <h3 className="item-clothes__information-price-current">
                ${price}
              </h3>
              <div className="item-clothes__information-price-wrapper-discount">
                <p className="item-clothes__information-price-discount">
                  -{discount}%
                </p>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};
