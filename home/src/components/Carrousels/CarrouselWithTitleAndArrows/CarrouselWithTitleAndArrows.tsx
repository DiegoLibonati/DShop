import React, { useRef } from "react";

import type { CarrouselWithTitleAndArrowsProps } from "@src/entities/props";

import { SvgArrowLeft } from "@src/components/Svgs/SvgArrowLeft/SvgArrowLeft";
import { SvgArrowRight } from "@src/components/Svgs/SvgArrowRight/SvgArrowRight";

import { lang } from "@src/constants/lang";

import { getIdsByLength } from "shared_utils/SharedUtils";

import "@src/components/Carrousels/CarrouselWithTitleAndArrows/CarrouselWithTitleAndArrows.css";

export const CarrouselWithTitleAndArrows = ({
  children,
}: CarrouselWithTitleAndArrowsProps) => {
  const refContent = useRef<HTMLDivElement | null>(null);

  const rootIds = getIdsByLength(2);

  const handleClickLeft = () => {
    refContent.current!.scrollBy({
      left: -refContent.current?.offsetWidth!,
      behavior: "smooth",
    });
  };

  const handleClickRight = () => {
    refContent.current!.scrollBy({
      left: refContent.current?.offsetWidth!,
      behavior: "smooth",
    });
  };

  return (
    <div className="carousel-with-title-and-arrows">
      <div className="carousel-with-title-and-arrows__header">
        <h2 className="carousel-with-title-and-arrows__header-title">
          {lang["en"].ourHappyCustomers.title}
        </h2>

        <div className="carousel-with-title-and-arrows__header-actions">
          <button
            type="button"
            aria-label="prev item"
            className="carousel-with-title-and-arrows__header-arrow"
            onClick={handleClickLeft}
          >
            <SvgArrowLeft
              width={24}
              height={24}
              idRoot={rootIds[0]}
              classNameWrapper="carousel-with-title-and-arrows__header-arrow-icon-wrapper"
            ></SvgArrowLeft>
          </button>
          <button
            type="button"
            aria-label="next item"
            className="carousel-with-title-and-arrows__header-arrow"
            onClick={handleClickRight}
          >
            <SvgArrowRight
              width={24}
              height={24}
              idRoot={rootIds[1]}
              classNameWrapper="carousel-with-title-and-arrows__header-arrow-icon-wrapper"
            ></SvgArrowRight>
          </button>
        </div>
      </div>

      <div className="carousel-with-title-and-arrows__content" ref={refContent}>
        {children}
      </div>
    </div>
  );
};
