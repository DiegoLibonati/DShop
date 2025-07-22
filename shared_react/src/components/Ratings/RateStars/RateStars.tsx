import React from "react";

import { RateStarsProps } from "@src/entities/props";

import { SvgStarToFill } from "@src/components/Svgs/SvgStarToFill/SvgStarToFill";

import "@src/components/Ratings/RateStars/RateStars.css";

export const RateStars = ({
  max,
  value,
  inColor,
  outColor,
  className,
}: RateStarsProps) => {
  return (
    <div className="rate-stars">
      {[...Array(max)].map((_, i) => {
        const starValue = i + 1;
        const fillPercentage =
          Math.min(Math.max(value - (starValue - 1), 0), 1) * 100;

        return (
          <SvgStarToFill
            key={`star_${i}_ratestars`}
            className={`rate-stars__star ${className}`}
            fill={fillPercentage}
            inColor={inColor}
            outColor={outColor}
          ></SvgStarToFill>
        );
      })}
    </div>
  );
};
