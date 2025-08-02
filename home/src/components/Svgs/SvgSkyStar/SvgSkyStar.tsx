import React, { useEffect, useRef } from "react";

import { mountComponent, unMountComponent } from "shared_utils/SharedUtils";
import { SvgSkyStarProps } from "shared_utils/SharedUtilsProps";
import { Component } from "shared_utils/SharedUtilsEnums";

export const SvgSkyStar = ({
  idRoot,
  width,
  height,
  className,
  wrapperClass,
}: SvgSkyStarProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onInit = () => {
    mountComponent(ref.current!, Component.SvgSkyStar, {
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

  return <div ref={ref} className={wrapperClass}></div>;
};
