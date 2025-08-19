import React, { useEffect, useRef } from "react";

import { mountComponent, unMountComponent } from "shared_core/SharedCore";
import { MenuScreenWhiteProps } from "shared_core/SharedCoreProps";
import { Component } from "shared_core/SharedCoreEnums";

export const MenuScreenWhite = ({
  idRoot,
  className,
  classNameWrapper,
  children,
}: MenuScreenWhiteProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onInit = () => {
    mountComponent(ref.current!, Component.MenuScreenWhite, {
      idRoot: idRoot,
      className: className,
      children: children,
    });
  };

  const onDestroy = () => {
    unMountComponent(idRoot);
  };

  const onPropsChange = () => {
    mountComponent(ref.current!, Component.MenuScreenWhite, {
      idRoot: idRoot,
      className: className,
      children: children,
    });
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
