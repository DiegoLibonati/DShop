import React, { useRef, useEffect } from "react";

import { mountComponent, unMountComponent } from "shared_angular/SharedAngular";
import { Component } from "shared_angular/SharedAngularEnums";
import { ReviewCustomerProps } from "shared_angular/SharedAngularProps";

export const ReviewCustomer = ({
  idRoot,
  description,
  maxStars,
  name,
  valueStars,
  className,
  classNameWrapper,
}: ReviewCustomerProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onInit = () => {
    mountComponent(ref.current!, Component.ReviewCustomer, {
      idRoot: idRoot,
      name: name,
      description: description,
      valueStars: valueStars,
      maxStars: maxStars,
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

export default ReviewCustomer;
