import React, { useRef, useEffect } from "react";

import { mountComponent, unMountComponent } from "shared_react/SharedReact";
import { Component } from "shared_react/SharedReactEnums";
import { ButtonBlackProps } from "shared_react/SharedReactProps";

export const ButtonBlack = ({
  idRoot,
  children,
  rounded,
  className,
}: ButtonBlackProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onInit = () => {
    mountComponent(ref.current!, Component.ButtonBlack, {
      idRoot: idRoot,
      children: children,
      rounded: rounded,
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

  return <div ref={ref}></div>;
};
