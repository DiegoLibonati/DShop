declare module "shared_react/SharedReact" {
  import { Component } from "shared_react/SharedReactEnums";

  export const mountComponent: (
    el: HTMLDivElement,
    idComponent: Component,
    props: Record<string, unknown> = {}
  ) => void;
}

declare module "shared_react/SharedReactEnums" {
  export enum Component {
    ButtonBlack = "button-black",
  }
}

declare module "shared_react/SharedReactProps" {
  import React from "react";

  export interface BlackButtonProps {
    rounded?: boolean;
    children?: React.ReactNode;
    className?: string;
  }
}

declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";
