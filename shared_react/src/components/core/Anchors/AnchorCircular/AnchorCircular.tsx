import React, { useEffect, useRef } from "react";

import { mountComponent, unMountComponent } from "shared_core/SharedCore";
import { AnchorCircularProps } from "shared_core/SharedCoreProps";
import { Component } from "shared_core/SharedCoreEnums";

export const AnchorCircular = ({
  idRoot,
  ariaLabel,
  href,
  borderGray,
  target,
  className,
  classNameWrapper,
  children,
  language,
}: AnchorCircularProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onInit = () => {
    mountComponent(ref.current!, Component.AnchorCircular, {
      idRoot: idRoot,
      ariaLabel: ariaLabel,
      href: href,
      borderGray: borderGray,
      target: target,
      language: language,
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
