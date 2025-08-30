import React, { useEffect, useRef } from "react";

import { mountComponent, unMountComponent } from "shared_core/SharedCore";
import { SliderSnapXProps } from "shared_core/SharedCoreProps";
import { Component } from "shared_core/SharedCoreEnums";
import { MountOptions } from "shared_core/SharedCoreEntities";

export const SliderSnapX = ({
  idRoot,
  html,
  language,
  children,
  className,
  classNameWrapper,
}: SliderSnapXProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onInit = () => {
    const options: MountOptions = {
      idComponent: Component.SliderSnapX,
      props: {
        idRoot: idRoot,
        className: className,
        children: children,
        language: language,
        html: html,
      },
    };

    mountComponent(ref.current!, options);
  };

  const onChildrenChange = () => {
    const options: MountOptions = {
      idComponent: Component.SliderSnapX,
      props: {
        idRoot: idRoot,
        className: className,
        children: children,
        language: language,
        html: html,
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
  useEffect(onChildrenChange, [children]);

  return <div ref={ref} className={classNameWrapper}></div>;
};
