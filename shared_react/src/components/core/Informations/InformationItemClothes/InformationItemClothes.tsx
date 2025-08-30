import React, { useEffect, useRef } from "react";

import { mountComponent, unMountComponent } from "shared_core/SharedCore";
import { InformationItemClothesProps } from "shared_core/SharedCoreProps";
import { Component } from "shared_core/SharedCoreEnums";
import { MountOptions } from "shared_core/SharedCoreEntities";

export const InformationItemClothes = ({
  idRoot,
  discount,
  name,
  price,
  rate,
  description,
  language,
  className,
  classNameWrapper,
}: InformationItemClothesProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onInit = () => {
    const options: MountOptions = {
      idComponent: Component.InformationItemClothes,
      props: {
        idRoot: idRoot,
        discount: discount,
        name: name,
        price: price,
        rate: rate,
        description: description,
        language: language,
        className: className,
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
