import React, { useEffect, useRef } from "react";

import { mountComponent, unMountComponent } from "shared_angular/SharedAngular";
import { NotificationBarProps } from "shared_angular/SharedAngularProps";
import { Component } from "shared_angular/SharedAngularEnums";

const NotificationBar = ({
  idRoot,
  className,
  classNameWrapper,
  children,
  onClose,
}: Omit<NotificationBarProps, "text">) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onInit = () => {
    mountComponent(ref.current!, Component.NotificationBar, {
      idRoot: idRoot,
      text: children,
      className: className,
      onClose: onClose,
    });
  };

  const onDestroy = () => {
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

  useEffect(() => {
    onInit();

    return () => {
      onDestroy();
    };
  }, []);

  useEffect(onPropsChange, [className, children]);

  return <div ref={ref} className={classNameWrapper}></div>;
};

export default NotificationBar;
