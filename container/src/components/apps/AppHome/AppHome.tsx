import React, { useRef, useEffect } from "react";

import { mount, unMount } from "home/HomeApp";

const AppHome = () => {
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

  return <div ref={ref}></div>;
};

export default AppHome;
