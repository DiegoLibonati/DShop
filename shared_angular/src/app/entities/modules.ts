declare module "shared_react/SharedReact" {
  import { Component } from "shared_react/SharedReactEnums";

  export const mountComponent: (
    el: HTMLDivElement,
    idComponent: Component,
    props?: Record<string, unknown>
  ) => void;
  export const unMountComponent: (idRoot: string) => void;
}

declare module "shared_react/SharedReactEnums" {
  export enum Component {
    RateStars = "rate-stars",
  }
}

declare module "shared_react/SharedReactProps" {
  export interface DefaultProps {
    idRoot: string;
    className?: string;
    classNameWrapper?: string;
  }

  export interface RateStarsProps extends DefaultProps {
    max: number;
    value: number;
    outColor: string;
    inColor: string;
  }
}

declare module "shared_utils/SharedUtils" {
  import { Component } from "shared_utils/SharedUtilsEnums";

  export const mountComponent: (
    el: HTMLDivElement,
    idComponent: Component,
    props?: Record<string, unknown>
  ) => void;
  export const unMountComponent: (idRoot: string) => void;
  export const getIdsByLength: (length: number) => string[];
}

declare module "shared_utils/SharedUtilsEnums" {
  export enum Component {
    SvgStarToFill = "svg-star-to-fill",
    SvgCartShopping = "svg-cart-shopping",
    SvgChevronDown = "svg-chevron-down",
    SvgChevronUp = "svg-chevron-up",
    SvgHamburgerMenu = "svg-hamburger-menu",
    SvgSearch = "svg-search",
  }
}

declare module "shared_utils/SharedUtilsProps" {
  export interface DefaultProps {
    idRoot: string;
    className?: string;
    classNameWrapper?: string;
  }

  export interface SvgStarToFillProps extends DefaultProps {
    outColor: string;
    inColor: string;
    fill: number;
  }

  export interface SvgSearchProps extends DefaultProps {}

  export interface SvgHamburgerMenuProps extends DefaultProps {}

  export interface SvgChevronUpProps extends DefaultProps {}

  export interface SvgChevronDownProps extends DefaultProps {}

  export interface SvgCartShoppingProps extends DefaultProps {}
}

declare module "shared_utils/SharedUtilsStyles";
