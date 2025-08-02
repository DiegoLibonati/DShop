import React from "react";

import { SvgChevronUpProps } from "@src/entities/props";

export const SvgChevronUp = ({ idRoot, ...rest }: SvgChevronUpProps) => {
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
        d="M6 15L12 9L18 15"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
