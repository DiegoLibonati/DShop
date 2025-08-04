declare module "shared_react/SharedReact" {
  import { Component } from "shared_react/SharedReactEnums";

  export const mountComponent: (
    el: HTMLDivElement,
    idComponent: Component,
    props: Record<string, unknown> = {}
  ) => void;
  export const unMountComponent: (idRoot: string) => void;
}

declare module "shared_react/SharedReactEnums" {
  export enum Component {
    ButtonBlack = "button-black",
    ItemClothes = "item-clothes",
    SliderSnapX = "slider-snap-x",
  }
}

declare module "shared_react/SharedReactProps" {
  import React, { SVGProps } from "react";

  export interface DefaultProps {
    idRoot: string;
    children?: React.ReactNode;
    className?: string;
    classNameWrapper?: string;
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
  export const unMountComponent: (idRoot: string) => void;
}

declare module "shared_angular/SharedAngularEnums" {
  export enum Component {
    ButtonWhite = "button-white",
    ReviewCustomer = "review-customer",
  }
}

declare module "shared_angular/SharedAngularProps" {
  export interface DefaultProps {
    idRoot: string;
    children?: React.ReactNode;
    className?: string;
    classNameWrapper?: string;
  }

  export interface ButtonWhiteProps extends DefaultProps {
    ariaLabel: string;
    rounded?: boolean;
    borderGray?: boolean;
    onClick?: (e: MouseEvent) => void;
  }

  export interface ReviewCustomerProps extends DefaultProps {
    name: string;
    description: string;
    maxStars: number;
    valueStars: number;
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
    SvgSkyStar = "svg-sky-star",
    SvgArrowLeft = "svg-arrow-left",
    SvgArrowRight = "svg-arrow-right",
  }
}

declare module "shared_utils/SharedUtilsProps" {
  import { SVGProps } from "react";

  export interface DefaultProps {
    idRoot: string;
    className?: string;
    classNameWrapper?: string;
  }

  export interface SvgStarToFillProps
    extends SVGProps<SVGSVGElement>,
      DefaultProps {
    outColor: string;
    inColor: string;
    fill: number;
  }

  export interface SvgSearchProps
    extends SVGProps<SVGSVGElement>,
      DefaultProps {}

  export interface SvgHamburgerMenuProps
    extends SVGProps<SVGSVGElement>,
      DefaultProps {}

  export interface SvgChevronUpProps
    extends SVGProps<SVGSVGElement>,
      DefaultProps {}

  export interface SvgChevronDownProps
    extends SVGProps<SVGSVGElement>,
      DefaultProps {}

  export interface SvgCartShoppingProps
    extends SVGProps<SVGSVGElement>,
      DefaultProps {}

  export interface SvgSkyStarProps
    extends SVGProps<SVGSVGElement>,
      DefaultProps {}

  export interface SvgArrowLeftProps
    extends SVGProps<SVGSVGElement>,
      DefaultProps {}

  export interface SvgArrowRightProps
    extends SVGProps<SVGSVGElement>,
      DefaultProps {}
}

declare module "shared_utils/SharedUtilsStyles";

declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";
