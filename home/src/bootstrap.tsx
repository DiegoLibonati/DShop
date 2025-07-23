import React from "react";
import { createRoot, Root } from "react-dom/client";

import { App } from "@src/App";

let root: Root | null = null;

const mount = (el: HTMLDivElement) => {
  if (!root) {
    root = createRoot(el);
  }

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
