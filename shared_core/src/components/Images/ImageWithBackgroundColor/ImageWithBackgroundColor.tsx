import React from "react";

import { ImageWithBackgroundColorProps } from "@src/entities/props";

import "@src/components/Images/ImageWithBackgroundColor/ImageWithBackgroundColor.css";

export const ImageWithBackgroundColor = ({
  src,
  alt,
  bgColor,
  isActive,
  className,
}: ImageWithBackgroundColorProps) => {
  return (
    <div
      className={`image-with-background-color-wrapper ${
        isActive && "image-with-background-color-wrapper--active"
      } ${className}`}
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
