import React, { useRef, useEffect } from "react";

import { AppHomeProps } from "@src/entities/props";

import { useRouter } from "@src/hooks/useRouter";

import { CLOTHES_1 } from "@src/constants/clothes";
import { reviews } from "@src/constants/reviews";

import { mount, MountOptions, unMount } from "home/HomeApp";

const AppHome = ({ classNameWrapper }: AppHomeProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { navigateToProductDetail } = useRouter();

  const onInit = () => {
    const options: MountOptions = {
      props: {
        callbacks: { navigateToProductDetail: navigateToProductDetail },
        content: {
          brands: ["VERSACE", "ZARA", "GUCCI", "PRADA", "Calvin Klein"],
          newArrivals: CLOTHES_1,
          topSellings: CLOTHES_1,
          reviews: reviews,
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

export default AppHome;
