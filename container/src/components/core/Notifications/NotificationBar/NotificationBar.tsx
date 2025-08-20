import React, { Fragment, useEffect, useRef } from "react";
import { createRoot, Root } from "react-dom/client";

import { mountComponent, unMountComponent } from "shared_angular/SharedAngular";
import { NotificationBarProps } from "shared_angular/SharedAngularProps";
import { Component } from "shared_angular/SharedAngularEnums";

const NotificationBar = ({
  idRoot,
  className,
  classNameWrapper,
  children,
  onClose,
}: NotificationBarProps) => {
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
    mountComponent(ref.current!, Component.NotificationBar, {
      idRoot: idRoot,
      text: children,
      className: className,
      onClose: onClose,
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

  const onPropsChange = () => {
    mountComponent(ref.current!, Component.NotificationBar, {
      idRoot: idRoot,
      text: children,
      className: className,
      onClose: onClose,
    });
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

  useEffect(onPropsChange, [className]);
  useEffect(onChildrenChange, [children]);

  return <div ref={ref} className={classNameWrapper}></div>;
};

export default NotificationBar;
