import React, { useRef, useEffect } from "react";

import { AppHomeProps } from "@src/entities/props";

import { mount, unMount } from "home/HomeApp";

const AppHome = ({ classNameWrapper }: AppHomeProps) => {
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

export default AppHome;
