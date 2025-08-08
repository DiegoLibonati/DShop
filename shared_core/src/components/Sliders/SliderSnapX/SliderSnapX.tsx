import React from "react";

import { SliderSnapXProps } from "@src/entities/props";

import "@src/components/Sliders/SliderSnapX/SliderSnapX.css";

export const SliderSnapX = ({ children, className }: SliderSnapXProps) => {
  return <div className={`slider-snap-x ${className}`}>{children}</div>;
};
