import React, { useRef } from "react";

import { HeaderOptionProps } from "@src/entities/props";

import { SvgChevronDown } from "@src/components/core/Svgs/SvgChevronDown/SvgChevronDown";
import { SvgChevronUp } from "@src/components/core/Svgs/SvgChevronUp/SvgChevronUp";

import { getIdsByLength } from "shared_core/SharedCore";

import "@src/components/composed/Headers/HeaderOption/HeaderOption.css";

export const HeaderOption = ({
  name,
  open,
  isMenu,
  onClick,
}: HeaderOptionProps) => {
  const idsLayouts = useRef<string[]>(getIdsByLength(2));

  return (
    <button
      type="button"
      aria-label={`header ${name}`}
      className="header-option"
      onClick={onClick}
    >
      <p className="header-option__text">{name}</p>
      {isMenu && !open && (
        <SvgChevronDown
          idRoot={idsLayouts.current[0]}
          className="header-option__icon"
          classNameWrapper="header__option-icon-wrapper"
        ></SvgChevronDown>
      )}

      {isMenu && open && (
        <SvgChevronUp
          idRoot={idsLayouts.current[1]}
          className="header-option__icon"
          classNameWrapper="header__option-icon-wrapper"
        ></SvgChevronUp>
      )}
    </button>
  );
};
