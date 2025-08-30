import React, { useRef, useEffect } from "react";

import { mountComponent, unMountComponent } from "shared_core/SharedCore";
import { MountOptions } from "shared_core/SharedCoreEntities";
import { Component } from "shared_core/SharedCoreEnums";
import { SliderSnapXProps } from "shared_core/SharedCoreProps";

export const SliderSnapX = ({
  idRoot,
  language,
  children,
  className,
  classNameWrapper,
}: SliderSnapXProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onInit = () => {
    const options: MountOptions = {
      idComponent: Component.ButtonWhite,
      props: {
        idRoot: idRoot,
        children: children,
        language: language,
        className: className,
      },
    };

    mountComponent(ref.current!, options);
  };

  const onChildrenChange = () => {
    const options: MountOptions = {
      idComponent: Component.ButtonWhite,
      props: {
        idRoot: idRoot,
        children: children,
        language: language,
        className: className,
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
