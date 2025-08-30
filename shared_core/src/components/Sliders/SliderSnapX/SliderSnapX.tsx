import React from "react";

import { SliderSnapXProps } from "@src/entities/props";

import "@src/components/Sliders/SliderSnapX/SliderSnapX.css";

export const SliderSnapX = ({
  children,
  html,
  className,
}: SliderSnapXProps) => {
  if (html)
    return (
      <div
        className={`slider-snap-x ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    );

  return <div className={`slider-snap-x ${className}`}>{children}</div>;
};
