import React from "react";
import { HashRouter as HashRouterDom } from "react-router-dom";

import { HashRouter as HashRouterApp } from "@src/router/HashRouter/HashRouter";

export const App = () => {
  return (
    <HashRouterDom>
      <HashRouterApp></HashRouterApp>
    </HashRouterDom>
  );
};
