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
    ItemClothes = "item-clothes",
    FooterWithSubscribeNewsletter = "footer-with-subscribe-newsletter",
    SubscribeNewsletter = "subscribe-newsletter",
  }
}

declare module "shared_react/SharedReactProps" {
  import React, { SVGProps } from "react";

  import { Locale } from "shared_core/SharedCoreEntities";

  export interface DefaultProps {
    idRoot: string;
    className?: string;
    classNameWrapper?: string;
    children?: React.ReactNode;
    language?: Locale;
  }

  export interface ItemClothesProps extends DefaultProps {
    src: string;
    name: string;
    rate: number;
    price: number;
    discount: number;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
  }

  export interface FooterWithSubscribeNewsletterProps extends DefaultProps {
    title: string;
    description: string;
    instagram?: string;
    facebook?: string;
    twitter?: string;
    onSubmitSubscribe: (inputValue: string) => void;
  }

  export interface SubscribeNewsletterProps extends DefaultProps {
    title: string;
    submitLabel: string;
    onSubmit: (inputValue: string) => void;
  }
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
    Header = "header",
    ReviewCustomer = "review-customer",
  }
}

declare module "shared_angular/SharedAngularProps" {
  import { Locale } from "shared_core/SharedCoreEntities";

  interface DefaultProps {
    idRoot: string;
    language?: Locale;
    className?: string;
    classNameWrapper?: string;
  }

  export interface HeaderProps extends DefaultProps {
    name: string;
    isFixed?: boolean;
    onClickMenu: (e: MouseEvent) => void;
    onSubmitSearch: (e: Event, searchInputValue: string) => void;
    onClickSearch: (e: MouseEvent) => void;
    onClickCart: (e: MouseEvent) => void;
  }

  export interface ReviewCustomerProps extends DefaultProps {
    name: string;
    description: string;
    maxStars: number;
    valueStars: number;
  }
}

declare module "shared_core/SharedCore" {
  import { Component } from "shared_core/SharedCoreEnums";

  export const mountComponent: (
    el: HTMLDivElement,
    idComponent: Component,
    props?: Record<string, unknown>
  ) => void;
  export const unMountComponent: (idRoot: string) => void;
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
  import { SVGProps } from "react";

  import { Locale } from "shared_core/SharedCoreEntities";

  export interface DefaultProps {
    idRoot: string;
    className?: string;
    classNameWrapper?: string;
    children?: React.ReactNode;
    language?: Locale;
  }

  export interface ButtonBlackProps extends DefaultProps {
    ariaLabel: string;
    rounded?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
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
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  }

  export interface AnchorCircularProps extends DefaultProps {
    ariaLabel: string;
    href: string;
    target?: React.HTMLAttributeAnchorTarget;
    borderGray?: boolean;
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

  export interface SvgTwitterProps
    extends SVGProps<SVGSVGElement>,
      DefaultProps {}

  export interface SvgFacebookProps
    extends SVGProps<SVGSVGElement>,
      DefaultProps {}

  export interface SvgInstagramProps
    extends SVGProps<SVGSVGElement>,
      DefaultProps {}
}

declare module "shared_core/SharedCoreStyles";

declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";
