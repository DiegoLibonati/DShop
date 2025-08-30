import React, { useEffect, useRef } from "react";

import { mountComponent, unMountComponent } from "shared_core/SharedCore";
import { MenuScreenWhiteProps } from "shared_core/SharedCoreProps";
import { Component } from "shared_core/SharedCoreEnums";
import { MountOptions } from "shared_core/SharedCoreEntities";

export const MenuScreenWhite = ({
  idRoot,
  className,
  classNameWrapper,
  children,
}: MenuScreenWhiteProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onInit = () => {
    const options: MountOptions = {
      idComponent: Component.MenuScreenWhite,
      props: {
        idRoot: idRoot,
        className: className,
        children: children,
      },
    };

    mountComponent(ref.current!, options);
  };

  const onDestroy = () => {
    unMountComponent(idRoot);
  };

  const onPropsChange = () => {
    const options: MountOptions = {
      idComponent: Component.MenuScreenWhite,
      props: {
        idRoot: idRoot,
        className: className,
        children: children,
      },
    };

    mountComponent(ref.current!, options);
  };

  useEffect(() => {
    onInit();

    return () => {
      onDestroy();
    };
  }, []);

  useEffect(onPropsChange, [className, children]);

  return <div ref={ref} className={classNameWrapper}></div>;
};
