import React, { useRef, useEffect } from "react";

import { mountComponent } from "shared_angular/SharedAngular";
import { Component } from "shared_angular/SharedAngularEnums";
import { HeaderProps } from "shared_angular/SharedAngularProps";

export const Header = ({
  name,
  options,
  className,
  onClickCart,
  onClickMenu,
  onClickSearch,
  onSubmitSearch,
}: HeaderProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onInit = () => {
    mountComponent(ref.current!, Component.Header, {
      name: name,
      options: options,
      className: className,
      onClickCart: onClickCart,
      onClickMenu: onClickMenu,
      onClickSearch: onClickSearch,
      onSubmitSearch: onSubmitSearch,
    });
  };

  useEffect(onInit, []);

  return <div ref={ref}></div>;
};

export default Header;
