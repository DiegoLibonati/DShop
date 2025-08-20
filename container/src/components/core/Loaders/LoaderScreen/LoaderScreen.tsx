import React, { useEffect, useRef } from "react";

import { mountComponent, unMountComponent } from "shared_react/SharedReact";
import { LoaderScreenProps } from "shared_react/SharedReactProps";
import { Component } from "shared_react/SharedReactEnums";

export const LoaderScreen = ({
  idRoot,
  className,
  classNameWrapper,
  children,
}: LoaderScreenProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onInit = () => {
    mountComponent(ref.current!, Component.LoaderScreen, {
      idRoot: idRoot,
      className: className,
      children: children,
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
