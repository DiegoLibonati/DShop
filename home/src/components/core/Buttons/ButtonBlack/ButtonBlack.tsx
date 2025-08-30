import React, { useRef, useEffect } from "react";

import { mountComponent, unMountComponent } from "shared_core/SharedCore";
import { MountOptions } from "shared_core/SharedCoreEntities";
import { Component } from "shared_core/SharedCoreEnums";
import { ButtonBlackProps } from "shared_core/SharedCoreProps";

export const ButtonBlack = ({
  idRoot,
  children,
  rounded,
  language,
  className,
  classNameWrapper,
  onClick,
}: ButtonBlackProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onInit = () => {
    const options: MountOptions = {
      idComponent: Component.ButtonBlack,
      props: {
        idRoot: idRoot,
        children: children,
        rounded: rounded,
        language: language,
        className: className,
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
