import React, { useRef, useEffect } from "react";

import {
  mountComponent,
  MountOptions,
  unMountComponent,
} from "shared_react/SharedReact";
import { Component } from "shared_react/SharedReactEnums";
import { GalleryClothesProps } from "shared_react/SharedReactProps";

export const GalleryClothes = ({
  idRoot,
  children,
  clothes,
  title,
  language,
  className,
  classNameWrapper,
  onClothesClick,
}: GalleryClothesProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onInit = () => {
    const options: MountOptions = {
      idComponent: Component.LoaderScreen,
      props: {
        idRoot: idRoot,
        children: children,
        title: title,
        language: language,
        className: className,
        clothes: clothes,
        onClothesClick: onClothesClick,
      },
    };

    mountComponent(ref.current!, options);
  };

  const onClothesChange = () => {
    const options: MountOptions = {
      idComponent: Component.GalleryClothes,
      props: {
        idRoot: idRoot,
        children: children,
        title: title,
        language: language,
        className: className,
        clothes: clothes,
        onClothesClick: onClothesClick,
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

  useEffect(onClothesChange, [clothes]);

  return <div ref={ref} className={classNameWrapper}></div>;
};
