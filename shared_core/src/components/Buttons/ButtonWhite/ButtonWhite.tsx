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
  html,
  onClick,
}: ButtonWhiteProps) => {
  if (html)
    return (
      <button
        type={type ?? "button"}
        className={`button-white ${rounded && "button-white--rounded"} ${
          borderGray && "button-white--border-gray"
        } ${className}`}
        aria-label={ariaLabel}
        onClick={onClick ?? undefined}
        dangerouslySetInnerHTML={{ __html: html }}
      ></button>
    );

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
