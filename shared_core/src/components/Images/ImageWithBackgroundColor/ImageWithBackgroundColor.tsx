import React from "react";

import { ImageWithBackgroundColorProps } from "@src/entities/props";

import "@src/components/Images/ImageWithBackgroundColor/ImageWithBackgroundColor.css";

export const ImageWithBackgroundColor = ({
  src,
  alt,
  bgColor,
  className,
}: ImageWithBackgroundColorProps) => {
  return (
    <div
      className={`image-with-background-color-wrapper ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      <img
        src={src}
        alt={alt}
        className="image-with-background-color__img"
      ></img>
    </div>
  );
};
