import React from "react";
import { MemoryRouter as MemoryRouterDom } from "react-router-dom";

import { MemoryRouter as MemoryRouterApp } from "@src/router/MemoryRouter/MemoryRouter";

export const App = () => {
  return (
    <MemoryRouterDom>
      <MemoryRouterApp></MemoryRouterApp>
    </MemoryRouterDom>
  );
};
