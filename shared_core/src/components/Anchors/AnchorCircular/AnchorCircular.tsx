import React from "react";

import { AnchorCircularProps } from "@src/entities/props";

import "@src/components/Anchors/AnchorCircular/AnchorCircular.css";

export const AnchorCircular = ({
  ariaLabel,
  borderGray,
  href,
  target,
  className,
  children,
}: AnchorCircularProps) => {
  return (
    <a
      className={`anchor-circular ${
        borderGray && "anchor-circular--border-gray"
      } ${className}`}
      aria-label={ariaLabel}
      href={href}
      target={target ?? "_blank"}
    >
      {children}
    </a>
  );
};
