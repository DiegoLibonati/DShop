import React from "react";
import { createRoot, Root } from "react-dom/client";

import {
  ButtonBlackProps,
  ItemClothesProps,
  RateStarsProps,
  SliderSnapXProps,
} from "@src/entities/props";
import { Component } from "@src/entities/enum.d";

import { App } from "@src/App";
import { ButtonBlack } from "@src/components/Buttons/ButtonBlack/ButtonBlack";
import { ItemClothes } from "@src/components/Items/ItemClothes/ItemClothes";
import { RateStars } from "@src/components/Ratings/RateStars/RateStars";
import { SliderSnapX } from "@src/components/Sliders/SliderSnapX/SliderSnapX";

import { IS_DEV } from "@src/constants/envs";

const roots: Record<string, Root> = {};

export const getComponentById = (
  idComponent: Component,
  props:
    | Record<string, unknown>
    | ButtonBlackProps
    | ItemClothesProps
    | RateStarsProps
    | SliderSnapXProps
): React.ReactNode => {
  return {
    [Component.ButtonBlack]: <ButtonBlack {...(props as ButtonBlackProps)} />,
    [Component.AppTest]: <App {...(props as Record<string, unknown>)} />,
    [Component.ItemClothes]: (
      <ItemClothes {...(props as ItemClothesProps)}></ItemClothes>
    ),
    [Component.RateStars]: (
      <RateStars {...(props as RateStarsProps)}></RateStars>
    ),
    [Component.SliderSnapX]: (
      <SliderSnapX {...(props as SliderSnapXProps)}></SliderSnapX>
    ),
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

  const componentId = props?.idRoot as string;

  if (!componentId) {
    throw new Error("You must provide an 'idRoot' to identify the component.");
  }

  const reactNode = getComponentById(idComponent, props);
  const rootExists = roots[componentId];

  if (rootExists) {
    rootExists.render(reactNode);
    return;
  }

  const root = createRoot(el);

  root.render(reactNode);
  roots[componentId] = root;
};

// Dev
if (IS_DEV === "development") {
  const devRoot = document.getElementById(
    "_shared-react-dev-root"
  ) as HTMLDivElement;

  if (devRoot) {
    mountComponent(devRoot, Component.AppTest, { idRoot: "Rootcito APP" });
  }
}

export { mountComponent };
