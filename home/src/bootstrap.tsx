import React from "react";
import { createRoot } from "react-dom/client";

import { App } from "@src/App";

const mount = (el: HTMLDivElement) => {
  const root = createRoot(el);

  root.render(<App />);
};

// Dev
if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("_home-dev-root") as HTMLDivElement;

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
