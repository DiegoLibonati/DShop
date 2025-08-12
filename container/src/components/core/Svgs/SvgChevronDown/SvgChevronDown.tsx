import React, { useEffect, useRef } from "react";

import { mountComponent, unMountComponent } from "shared_core/SharedCore";
import { SvgChevronDownProps } from "shared_core/SharedCoreProps";
import { Component } from "shared_core/SharedCoreEnums";

export const SvgChevronDown = ({
  idRoot,
  width,
  height,
  className,
  classNameWrapper,
}: SvgChevronDownProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onInit = () => {
    mountComponent(ref.current!, Component.SvgChevronDown, {
      idRoot: idRoot,
      width: width,
      height: height,
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
