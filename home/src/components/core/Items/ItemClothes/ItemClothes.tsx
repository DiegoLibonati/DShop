import React, { useRef, useEffect } from "react";

import { mountComponent, unMountComponent } from "shared_react/SharedReact";
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
  classNameWrapper,
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
