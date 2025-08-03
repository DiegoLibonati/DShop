import React from "react";
import { createRoot, Root } from "react-dom/client";

import { App } from "@src/App";

import { IS_DEV } from "@src/constants/envs";

const titleMfe: string = "Home";
let root: Root | null = null;

const mount = (el: HTMLElement, debug: boolean = false) => {
  if (!root) {
    root = createRoot(el);
  }

  root.render(<App />);

  if (IS_DEV === "development" && debug) {
    console.log(`[mountComponent - ${titleMfe}] mounting ${titleMfe}`);
  }
};

const unMount = (debug: boolean = false) => {
  if (!root) {
    throw new Error(
      `[unMountComponent - ${titleMfe}] No MFE found ${titleMfe}`
    );
  }

  root.unmount();
  root = null;

  if (IS_DEV === "development" && debug) {
    console.log(`[unMountComponent - ${titleMfe}] Unmounting ${titleMfe}`);
  }
};

// Dev
if (IS_DEV === "development") {
  const devRoot = document.getElementById("_home-dev-root") as HTMLDivElement;

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount, unMount };
