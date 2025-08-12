import React, { useRef, useEffect } from "react";

import { mountComponent, unMountComponent } from "shared_core/SharedCore";
import { Component } from "shared_core/SharedCoreEnums";
import { ButtonBlackProps } from "shared_core/SharedCoreProps";

export const ButtonBlack = ({
  idRoot,
  children,
  rounded,
  language,
  className,
  classNameWrapper
}: ButtonBlackProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onInit = () => {
    mountComponent(ref.current!, Component.ButtonBlack, {
      idRoot: idRoot,
      children: children,
      rounded: rounded,
      language: language,
      className: className,
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
