import React, { useEffect, useRef } from "react";

import { mountComponent, unMountComponent } from "shared_utils/SharedUtils";
import { SvgStarToFillProps } from "shared_utils/SharedUtilsProps";
import { Component } from "shared_utils/SharedUtilsEnums";

export const SvgStarToFill = ({
  idRoot,
  outColor,
  inColor,
  fill,
  className,
}: SvgStarToFillProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onInit = () => {
    mountComponent(ref.current!, Component.SvgStarToFill, {
      idRoot: idRoot,
      outColor: outColor,
      inColor: inColor,
      fill: fill,
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

  return <div ref={ref} className={`${className}-wrapper`}></div>;
};
