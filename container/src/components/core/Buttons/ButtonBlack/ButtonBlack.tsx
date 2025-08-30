import React, { useEffect, useRef } from "react";

import { mountComponent, unMountComponent } from "shared_core/SharedCore";
import { ButtonBlackProps } from "shared_core/SharedCoreProps";
import { Component } from "shared_core/SharedCoreEnums";
import { MountOptions } from "shared_core/SharedCoreEntities";

export const ButtonBlack = ({
  idRoot,
  ariaLabel,
  rounded,
  className,
  classNameWrapper,
  children,
  onClick,
}: ButtonBlackProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onInit = () => {
    const options: MountOptions = {
      idComponent: Component.ButtonBlack,
      props: {
        idRoot: idRoot,
        ariaLabel: ariaLabel,
        rounded: rounded,
        className: className,
        children: children,
        onClick: onClick,
      },
    };

    mountComponent(ref.current!, options);
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
