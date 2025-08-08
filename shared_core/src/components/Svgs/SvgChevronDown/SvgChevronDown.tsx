import React from "react";

import { SvgChevronDownProps } from "@src/entities/props";

export const SvgChevronDown = ({ idRoot, ...rest }: SvgChevronDownProps) => {
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
        d="M6 9L12 15L18 9"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
