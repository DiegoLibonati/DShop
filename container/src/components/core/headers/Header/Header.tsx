import React, { useRef, useEffect, Fragment } from "react";
import { createRoot, Root } from "react-dom/client";

import { mountComponent, unMountComponent } from "shared_angular/SharedAngular";
import { Component } from "shared_angular/SharedAngularEnums";
import { HeaderProps } from "shared_angular/SharedAngularProps";

export const Header = ({
  idRoot,
  name,
  language,
  isFixed,
  className,
  classNameWrapper,
  children,
  onClickCart,
  onClickMenu,
  onClickTitle,
  onClickSearch,
  onSubmitSearch,
}: HeaderProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const raf = useRef<number | null>(null);
  const slotRootChildren = useRef<Root | null>(null);

  const attachReactToSlot = () => {
    const slotId = `slot-${idRoot}`;
    const slotEl = document.getElementById(slotId);
    if (!slotEl) return false;

    if (!slotRootChildren.current) {
      slotRootChildren.current = createRoot(slotEl);
    }
    slotRootChildren.current.render(<Fragment>{children}</Fragment>);
    return true;
  };

  const onInit = () => {
    mountComponent(ref.current!, Component.Header, {
      idRoot: idRoot,
      name: name,
      isFixed: isFixed,
      language: language,
      className: className,
      onClickCart: onClickCart,
      onClickMenu: onClickMenu,
      onClickTitle: onClickTitle,
      onClickSearch: onClickSearch,
      onSubmitSearch: onSubmitSearch,
    });

    const tryAttach = () => {
      const ok = attachReactToSlot();
      if (!ok) raf.current = requestAnimationFrame(tryAttach);
    };

    tryAttach();
  };

  const onDestroy = () => {
    cancelAnimationFrame(raf.current!);
    slotRootChildren.current?.unmount();
    slotRootChildren.current = null;
    unMountComponent(idRoot);
  };

  const onChildrenChange = () => {
    if (!children || !slotRootChildren.current) return;
    slotRootChildren.current.render(<Fragment>{children}</Fragment>);
  };

  useEffect(() => {
    onInit();

    return () => {
      onDestroy();
    };
  }, []);

  useEffect(onChildrenChange, [children]);

  return <div ref={ref} className={classNameWrapper}></div>;
};

export default Header;
