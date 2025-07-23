import React, { useRef, useEffect } from "react";

import { mountComponent } from "shared_react/SharedReact";
import { Component } from "shared_react/SharedReactEnums";
import { SliderSnapXProps } from "shared_react/SharedReactProps";

export const SliderSnapX = ({
  idRoot,
  children,
  className,
}: SliderSnapXProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onInit = () => {
    mountComponent(ref.current!, Component.SliderSnapX, {
      idRoot: idRoot,
      children: children,
      className: className,
    });
  };

  const onChildrenChange = () => {
    mountComponent(ref.current!, Component.SliderSnapX, {
      idRoot: idRoot,
      children: children,
      className: className,
    });
  };

  useEffect(onInit, []);
  useEffect(onChildrenChange, [children]);

  return <div ref={ref} className={`${className}-wrapper`}></div>;
};
