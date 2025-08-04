import React, { useEffect, useRef } from "react";

import { mountComponent, unMountComponent } from "shared_utils/SharedUtils";
import { SvgArrowRightProps } from "shared_utils/SharedUtilsProps";
import { Component } from "shared_utils/SharedUtilsEnums";

export const SvgArrowRight = ({
  idRoot,
  width,
  height,
  className,
  classNameWrapper,
}: SvgArrowRightProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onInit = () => {
    mountComponent(ref.current!, Component.SvgArrowRight, {
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
