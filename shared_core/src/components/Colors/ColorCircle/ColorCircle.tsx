import React from "react";

import { ColorCircleProps } from "@src/entities/props";

import { SvgCheck } from "@src/components/Svgs/SvgCheck/SvgCheck";

import "@src/components/Colors/ColorCircle/ColorCircle.css";

export const ColorCircle = ({
  className,
  isActive,
  color,
  onClick,
}: ColorCircleProps) => {
  return (
    <div
      className={`color-circle ${
        onClick && "color-circle--pointer"
      } ${className}`}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {isActive && <SvgCheck className="color-circle__check"></SvgCheck>}
    </div>
  );
};
