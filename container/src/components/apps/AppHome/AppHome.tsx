import React, { useRef, useEffect } from "react";

import { mount } from "home/HomeApp";

const AppHome = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const onInit = () => {
    mount(ref.current!);
  };

  useEffect(onInit, []);

  return <div ref={ref}></div>;
};

export default AppHome;
