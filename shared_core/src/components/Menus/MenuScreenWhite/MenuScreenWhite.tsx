import React from "react";

import { MenuScreenWhiteProps } from "@src/entities/props";

import "@src/components/Menus/MenuScreenWhite/MenuScreenWhite.css";

export const MenuScreenWhite = ({
  className,
  children,
}: MenuScreenWhiteProps) => {
  return <div className={`menu-screen-white ${className}`}>{children}</div>;
};
