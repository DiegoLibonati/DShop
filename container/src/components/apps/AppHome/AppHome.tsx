import React, { useRef, useEffect } from "react";

import { AppHomeProps } from "@src/entities/props";

import { useRouter } from "@src/hooks/useRouter";

import { mount, unMount } from "home/HomeApp";

const AppHome = ({ classNameWrapper }: AppHomeProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { navigateToProductDetail } = useRouter();

  const onInit = () => {
    const options = {
      callbacks: { navigateToProductDetail: navigateToProductDetail },
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
