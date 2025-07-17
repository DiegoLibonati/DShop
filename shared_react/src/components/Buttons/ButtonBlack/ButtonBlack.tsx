import React from "react";

import { ButtonBlackProps } from "@src/entities/props";

import "@src/components/Buttons/ButtonBlack/ButtonBlack.css";

export const ButtonBlack = ({
  children,
  className,
  rounded,
}: ButtonBlackProps) => {
  return (
    <button
      type="button"
      className={`button-black ${className} ${
        rounded && "button-black--rounded"
      }`}
    >
      {children}
    </button>
  );
};
