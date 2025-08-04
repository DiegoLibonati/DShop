import React, { useRef, useEffect } from "react";

import { mountComponent, unMountComponent } from "shared_angular/SharedAngular";
import { Component } from "shared_angular/SharedAngularEnums";
import { ButtonWhiteProps } from "shared_angular/SharedAngularProps";

export const ButtonWhite = ({
  idRoot,
  ariaLabel,
  borderGray,
  rounded,
  className,
  classNameWrapper,
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

  const onDestroy = () => {
    unMountComponent(idRoot);
  };

  useEffect(() => {
    onInit();

    return () => {
      onDestroy();
    };
  }, []);

  return <div ref={ref} className={classNameWrapper}></div>;
};

export default ButtonWhite;
