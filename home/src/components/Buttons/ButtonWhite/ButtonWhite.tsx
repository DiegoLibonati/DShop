import React, { useRef, useEffect } from "react";

import { mountComponent } from "shared_angular/SharedAngular";
import { Component } from "shared_angular/SharedAngularEnums";
import { ButtonWhiteProps } from "shared_angular/SharedAngularProps";

export const ButtonWhite = ({
  idRoot,
  ariaLabel,
  borderGray,
  rounded,
  className,
  children,
  onClick,
}: ButtonWhiteProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onInit = () => {
    mountComponent(ref.current!, Component.ButtonWhite, {
      idRoot: idRoot,
      ariaLabel: ariaLabel,
      borderGray: borderGray,
      rounded: rounded,
      className: className,
      onClick: onClick,
      textContent: children,
    });
  };

  useEffect(onInit, []);

  return <div ref={ref} className={`${className}-wrapper`}></div>;
};

export default ButtonWhite;
