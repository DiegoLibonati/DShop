import React, { useRef } from "react";

import { RateStarsProps } from "@src/entities/props";

import { SvgStarToFill } from "@src/components/Svgs/SvgStarToFill/SvgStarToFill";

import { getIdsByLength } from "@src/helpers/getIdsByLength";

import "@src/components/Ratings/RateStars/RateStars.css";

export const RateStars = ({
  max,
  value,
  inColor,
  outColor,
  className,
  classNameStar,
}: RateStarsProps) => {
  const uuidsRef = useRef<string[]>(getIdsByLength(max));

  return (
    <div className={`rate-stars ${className}`}>
      {[...Array(max)].map((_, i) => {
        const starValue = i + 1;
        const fillPercentage =
          Math.min(Math.max(value - (starValue - 1), 0), 1) * 100;

        return (
          <SvgStarToFill
            idRoot={uuidsRef.current[i]}
            key={`star_${i}_ratestars`}
            className={`rate-stars__star ${classNameStar}`}
            fill={fillPercentage}
            inColor={inColor}
            outColor={outColor}
          ></SvgStarToFill>
        );
      })}
    </div>
  );
};
