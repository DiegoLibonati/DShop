import React, { useRef, useEffect } from "react";

import { mountComponent, unMountComponent } from "shared_core/SharedCore";
import { Component } from "shared_core/SharedCoreEnums";
import { SliderSnapXProps } from "shared_core/SharedCoreProps";

export const SliderSnapX = ({
  idRoot,
  children,
  className,
  classNameWrapper,
}: SliderSnapXProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onInit = () => {
    mountComponent(ref.current!, Component.SliderSnapX, {
      idRoot: idRoot,
      children: children,
      className: className,
    });
  };

  const onChildrenChange = () => {
    mountComponent(ref.current!, Component.SliderSnapX, {
      idRoot: idRoot,
      children: children,
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

  useEffect(onChildrenChange, [children]);

  return <div ref={ref} className={classNameWrapper}></div>;
};
