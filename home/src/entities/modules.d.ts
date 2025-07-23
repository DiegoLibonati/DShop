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
    ItemClothes = "item-clothes",
    SliderSnapX = "slider-snap-x",
  }
}

declare module "shared_react/SharedReactProps" {
  import React from "react";

  export interface DefaultProps {
    idRoot: string;
    children?: React.ReactNode;
    className?: string;
  }

  export interface ButtonBlackProps extends DefaultProps {
    rounded?: boolean;
  }

  export interface ItemClothesProps extends DefaultProps {
    src: string;
    name: string;
    rate: number;
    price: number;
    discount: number;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
  }

  export interface SliderSnapXProps extends DefaultProps {}
}

declare module "shared_angular/SharedAngular" {
  import { Component } from "shared_angular/SharedAngularEnums";

  export const mountComponent: (
    el: HTMLElement,
    id: Component,
    props: Record<string, unknown> = {}
  ) => void;
}

declare module "shared_angular/SharedAngularEnums" {
  export enum Component {
    ButtonWhite = "button-white",
  }
}

declare module "shared_angular/SharedAngularProps" {
  export interface DefaultProps {
    idRoot: string;
    children?: React.ReactNode;
    className?: string;
  }

  export interface ButtonWhiteProps extends DefaultProps {
    ariaLabel: string;
    rounded?: boolean;
    borderGray?: boolean;
    onClick?: (e: MouseEvent) => void;
  }
}

declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";
