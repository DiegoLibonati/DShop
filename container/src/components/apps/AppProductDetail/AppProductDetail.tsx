import React, { useRef, useEffect } from "react";

import { AppProductDetailProps } from "@src/entities/props";

import { mount, unMount } from "product_detail/ProductDetailApp";

const AppProductDetail = ({ classNameWrapper }: AppProductDetailProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onInit = () => {
    mount(ref.current!);
  };

  const onDestroy = () => {
    unMount();
  };

  useEffect(() => {
    onInit();

    return () => {
      onDestroy();
    };
  }, []);

  return <div ref={ref} className={classNameWrapper}></div>;
};

export default AppProductDetail;
