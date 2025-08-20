import React, { useEffect, useRef } from "react";

import { mountComponent, unMountComponent } from "shared_core/SharedCore";
import { ImageWithBackgroundColorProps } from "shared_core/SharedCoreProps";
import { Component } from "shared_core/SharedCoreEnums";

export const ImageWithBackgroundColor = ({
  idRoot,
  src,
  alt,
  bgColor,
  isActive,
  language,
  onClick,
  className,
  classNameWrapper,
}: ImageWithBackgroundColorProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onInit = () => {
    mountComponent(ref.current!, Component.ImageWithBackgroundColor, {
      idRoot: idRoot,
      src: src,
      alt: alt,
      bgColor: bgColor,
      isActive: isActive,
      language: language,
      className: className,
      onClick: onClick,
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
