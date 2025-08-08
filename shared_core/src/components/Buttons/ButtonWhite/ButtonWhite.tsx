import React from "react";

import { ButtonWhiteProps } from "@src/entities/props";

import "@src/components/Buttons/ButtonWhite/ButtonWhite.css";

export const ButtonWhite = ({
  ariaLabel,
  borderGray,
  rounded,
  type,
  children,
  className,
  onClick,
}: ButtonWhiteProps) => {
  return (
    <button
      type={type ?? "button"}
      className={`button-white ${rounded && "button-white--rounded"} ${
        borderGray && "button-white--border-gray"
      } ${className}`}
      aria-label={ariaLabel}
      onClick={onClick ?? undefined}
    >
      {children}
    </button>
  );
};
