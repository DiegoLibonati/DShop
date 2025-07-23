import React, { useRef, useEffect } from "react";

import { mountComponent } from "shared_react/SharedReact";
import { Component } from "shared_react/SharedReactEnums";
import { ItemClothesProps } from "shared_react/SharedReactProps";

export const ItemClothes = ({
  idRoot,
  discount,
  name,
  price,
  rate,
  src,
  children,
  className,
  onClick,
}: ItemClothesProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onInit = () => {
    mountComponent(ref.current!, Component.ItemClothes, {
      idRoot: idRoot,
      discount: discount,
      name: name,
      price: price,
      rate: rate,
      src: src,
      children: children,
      className: className,
      onClick: onClick,
    });
  };

  useEffect(onInit, []);

  return <div ref={ref}></div>;
};
