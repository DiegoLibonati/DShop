import React from "react";
import { createRoot } from "react-dom/client";

import { Component } from "@src/entities/enum.d";

import { App } from "@src/App";
import { ButtonBlack } from "@src/components/Buttons/ButtonBlack/ButtonBlack";

import { IS_DEV } from "@src/constants/envs";

import "@src/index.css";

export const getComponentById = (
  idComponent: Component,
  props: Record<string, unknown>
): React.ReactNode => {
  return {
    [Component.ButtonBlack]: <ButtonBlack {...props} />,
    [Component.AppTest]: <App {...props} />,
  }[idComponent];
};

const mountComponent = (
  el: HTMLDivElement,
  idComponent: Component,
  props: Record<string, unknown> = {}
) => {
  // console.log("Element:", el);
  // console.log("Id Componente a renderizar: ", idComponent);
  // console.log("Props: ", props);

  const root = createRoot(el);

  const reactNode = getComponentById(idComponent, props);

  root.render(reactNode);
};

// Dev
if (IS_DEV === "development") {
  const devRoot = document.getElementById(
    "_shared-react-dev-root"
  ) as HTMLDivElement;

  if (devRoot) {
    mountComponent(devRoot, Component.AppTest);
  }
}

export { mountComponent };
