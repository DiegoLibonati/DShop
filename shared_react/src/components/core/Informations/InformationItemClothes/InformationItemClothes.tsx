import React, { useEffect, useRef } from "react";

import { mountComponent, unMountComponent } from "shared_core/SharedCore";
import { InformationItemClothesProps } from "shared_core/SharedCoreProps";
import { Component } from "shared_core/SharedCoreEnums";

export const InformationItemClothes = ({
  idRoot,
  discount,
  name,
  price,
  rate,
  className,
  classNameWrapper,
}: InformationItemClothesProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onInit = () => {
    mountComponent(ref.current!, Component.InformationItemClothes, {
      idRoot: idRoot,
      discount: discount,
      name: name,
      price: price,
      rate: rate,
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
