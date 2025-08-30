import React from "react";

import { ButtonBlackProps } from "@src/entities/props";

import "@src/components/Buttons/ButtonBlack/ButtonBlack.css";

export const ButtonBlack = ({
  ariaLabel,
  children,
  className,
  rounded,
  html,
  onClick,
}: ButtonBlackProps) => {
  if (html)
    return (
      <button
        type="button"
        aria-label={ariaLabel}
        className={`button-black ${className} ${
          rounded && "button-black--rounded"
        }`}
        dangerouslySetInnerHTML={{ __html: html }}
        onClick={onClick}
      ></button>
    );

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={`button-black ${className} ${
        rounded && "button-black--rounded"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
