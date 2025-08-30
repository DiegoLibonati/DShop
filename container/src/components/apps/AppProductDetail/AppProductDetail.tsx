import React, { useRef, useEffect } from "react";

import { AppProductDetailProps } from "@src/entities/props";

import { PRODUCT_1 } from "@src/constants/products";
import { CLOTHES_1 } from "@src/constants/clothes";

import { mount, MountOptions, unMount } from "product_detail/ProductDetailApp";

const AppProductDetail = ({ classNameWrapper }: AppProductDetailProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onInit = () => {
    const options: MountOptions = {
      props: {
        content: {
          product: PRODUCT_1,
          clothesAlsoLike: CLOTHES_1,
        },
      },
    };
    mount(ref.current!, options);
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
