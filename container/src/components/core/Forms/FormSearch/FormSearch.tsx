import React, { useEffect, useRef } from "react";

import { mountComponent, unMountComponent } from "shared_core/SharedCore";
import { FormSearchProps } from "shared_core/SharedCoreProps";
import { Component } from "shared_core/SharedCoreEnums";

export const FormSearch = ({
  idRoot,
  placeholder,
  className,
  classNameWrapper,
  children,
  onSubmit,
}: FormSearchProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onInit = () => {
    mountComponent(ref.current!, Component.FormSearch, {
      idRoot: idRoot,
      placeholder: placeholder,
      className: className,
      children: children,
      onSubmit: onSubmit,
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
