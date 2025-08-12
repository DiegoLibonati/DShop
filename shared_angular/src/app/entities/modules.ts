declare module "shared_core/SharedCore" {
  import { Component } from "shared_core/SharedCoreEnums";

  export const mountComponent: (
    el: HTMLDivElement,
    idComponent: Component,
    props?: Record<string, unknown>
  ) => void;
  export const unMountComponent: (idRoot: string) => void;
  export const getFinalPriceByDiscount: (
    price: number,
    discount: number
  ) => number;
  export const getIdsByLength: (length: number) => string[];
}

declare module "shared_core/SharedCoreEntities" {
  export type Locale = "en";
}

declare module "shared_core/SharedCoreEnums" {
  export enum Component {
    AppTest = "app-test",
    SvgStarToFill = "svg-star-to-fill",
    SvgCartShopping = "svg-cart-shopping",
    SvgChevronDown = "svg-chevron-down",
    SvgChevronUp = "svg-chevron-up",
    SvgHamburgerMenu = "svg-hamburger-menu",
    SvgSearch = "svg-search",
    SvgSkyStar = "svg-sky-star",
    SvgArrowLeft = "svg-arrow-left",
    SvgArrowRight = "svg-arrow-right",
    SvgTwitter = "svg-twitter",
    SvgFacebook = "svg-facebook",
    SvgInstagram = "svg-instagram",
    ButtonBlack = "button-black",
    ButtonWhite = "button-white",
    ImageWithBackgroundColor = "image-with-background-color",
    InformationItemClothes = "information-item-clothes",
    RateStars = "rate-stars",
    SliderSnapX = "slider-snap-x",
    AnchorCircular = "anchor-circular",
  }
}

declare module "shared_core/SharedCoreProps" {
  import { Locale } from "shared_core/SharedCoreEntities";

  export interface DefaultProps {
    idRoot: string;
    className?: string;
    classNameWrapper?: string;
    children?: string;
    language?: Locale;
  }

  export interface ButtonBlackProps extends DefaultProps {
    ariaLabel: string;
    rounded?: boolean;
    onClick?: (e: MouseEvent) => void;
  }

  export interface ImageWithBackgroundColorProps extends DefaultProps {
    src: string;
    alt: string;
    bgColor: string;
  }

  export interface InformationItemClothesProps extends DefaultProps {
    name: string;
    rate: number;
    price: number;
    discount: number;
  }

  export interface RateStarsProps extends DefaultProps {
    max: number;
    value: number;
    inColor: string;
    outColor: string;
    classNameStar?: string;
  }

  export interface SliderSnapXProps extends DefaultProps {}

  export interface ButtonWhiteProps extends DefaultProps {
    ariaLabel: string;
    rounded?: boolean;
    borderGray?: boolean;
    type?: "button" | "reset" | "submit";
    onClick?: (e: MouseEvent) => void;
  }

  export interface AnchorCircularProps extends DefaultProps {
    ariaLabel: string;
    href: string;
    target?: "_self" | "_blank";
    borderGray?: boolean;
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

  export interface SvgSkyStarProps extends DefaultProps {}

  export interface SvgArrowLeftProps extends DefaultProps {}

  export interface SvgArrowRightProps extends DefaultProps {}

  export interface SvgTwitterProps extends DefaultProps {}

  export interface SvgFacebookProps extends DefaultProps {}

  export interface SvgInstagramProps extends DefaultProps {}
}

declare module "shared_core/SharedCoreStyles";

declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";
