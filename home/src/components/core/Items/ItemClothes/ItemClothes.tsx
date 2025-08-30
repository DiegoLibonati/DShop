import React, { useRef, useEffect } from "react";

import {
  mountComponent,
  MountOptions,
  unMountComponent,
} from "shared_react/SharedReact";
import { Component } from "shared_react/SharedReactEnums";
import { ItemClothesProps } from "shared_react/SharedReactProps";

export const ItemClothes = ({
  idRoot,
  discount,
  name,
  price,
  rate,
  src,
  language,
  children,
  className,
  classNameWrapper,
  onClick,
}: ItemClothesProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onInit = () => {
    const options: MountOptions = {
      idComponent: Component.ItemClothes,
      props: {
        idRoot: idRoot,
        discount: discount,
        name: name,
        price: price,
        rate: rate,
        src: src,
        language: language,
        children: children,
        className: className,
        onClick: onClick,
      },
    };

    mountComponent(ref.current!, options);
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
