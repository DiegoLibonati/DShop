import React, { useRef, useEffect } from "react";

import { mountComponent, unMountComponent } from "shared_core/SharedCore";
import { Component } from "shared_core/SharedCoreEnums";
import { ButtonWhiteProps } from "shared_core/SharedCoreProps";

export const ButtonWhite = ({
  idRoot,
  ariaLabel,
  borderGray,
  rounded,
  type,
  language,
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
      type: type,
      language: language,
      className: className,
      children: children,
      onClick: onClick,
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
