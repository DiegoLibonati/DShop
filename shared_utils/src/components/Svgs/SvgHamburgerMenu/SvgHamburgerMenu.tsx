import React from "react";

import { SvgHamburgerMenuProps } from "@src/entities/props";

export const SvgHamburgerMenu = ({
  idRoot,
  ...rest
}: SvgHamburgerMenuProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M20 7L4 7"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M20 12L4 12"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M20 17L4 17"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
