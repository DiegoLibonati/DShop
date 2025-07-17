import React, { useRef, useEffect } from "react";

import { mountComponent } from "shared_react/SharedReact";
import { Component } from "shared_react/SharedReactEnums";
import { BlackButtonProps } from "shared_react/SharedReactProps";

const BlackButton = ({ children, rounded, className }: BlackButtonProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onInit = () => {
    mountComponent(ref.current!, Component.ButtonBlack, {
      children: children,
      rounded: rounded,
      className: className,
    });
  };

  useEffect(onInit, []);

  return <div ref={ref}></div>;
};

export default BlackButton;
