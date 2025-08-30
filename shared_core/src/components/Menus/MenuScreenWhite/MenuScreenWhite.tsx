import React from "react";

import { MenuScreenWhiteProps } from "@src/entities/props";

import "@src/components/Menus/MenuScreenWhite/MenuScreenWhite.css";

export const MenuScreenWhite = ({
  className,
  children,
  html,
}: MenuScreenWhiteProps) => {
  if (html)
    return (
      <div
        className={`menu-screen-white ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    );

  return <div className={`menu-screen-white ${className}`}>{children}</div>;
};
