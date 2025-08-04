import React, { useRef, useEffect } from "react";

import { mountComponent, unMountComponent } from "shared_angular/SharedAngular";
import { Component } from "shared_angular/SharedAngularEnums";
import { HeaderProps } from "shared_angular/SharedAngularProps";

export const Header = ({
  idRoot,
  name,
  options,
  className,
  classNameWrapper,
  onClickCart,
  onClickMenu,
  onClickSearch,
  onSubmitSearch,
}: HeaderProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onInit = () => {
    mountComponent(ref.current!, Component.Header, {
      idRoot: idRoot,
      name: name,
      options: options,
      className: className,
      onClickCart: onClickCart,
      onClickMenu: onClickMenu,
      onClickSearch: onClickSearch,
      onSubmitSearch: onSubmitSearch,
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

export default Header;
