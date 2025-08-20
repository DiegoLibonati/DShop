declare module "shared_core/SharedCore" {
  import { Component } from "shared_core/SharedCoreEnums";

  export const mountComponent: (
    el: HTMLDivElement,
    idComponent: Component,
    props: Record<string, unknown> = {}
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
    SvgClose = "svg-close",
    SvgCheck = "svg-check",
    ButtonBlack = "button-black",
    ButtonWhite = "button-white",
    ImageWithBackgroundColor = "image-with-background-color",
    InformationItemClothes = "information-item-clothes",
    RateStars = "rate-stars",
    SliderSnapX = "slider-snap-x",
    AnchorCircular = "anchor-circular",
    MenuScreenWhite = "menu-screen-white",
    FormSearch = "form-search",
    ColorCircle = "color-circle",
    TagSimple = "tag-simple",
    CounterWithActions = "counter-with-actions",
  }
}

declare module "shared_core/SharedCoreProps" {
  import React, { SVGProps } from "react";

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
    isActive: boolean;
  }

  export interface InformationItemClothesProps extends DefaultProps {
    name: string;
    rate: number;
    price: number;
    discount: number;
    description?: string;
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

  export interface MenuScreenWhiteProps extends DefaultProps {}

  export interface FormSearchProps extends DefaultProps {
    placeholder?: string;
    onSubmit: (inputValue: string) => void;
  }

  export interface ColorCircleProps extends DefaultProps {
    color: string;
    isActive?: boolean;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
  }

  export interface TagSimpleProps extends DefaultProps {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
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

  export interface SvgCloseProps
    extends SVGProps<SVGSVGElement>,
      DefaultProps {}

  export interface SvgCheckProps
    extends SVGProps<SVGSVGElement>,
      DefaultProps {}
}

declare module "shared_core/SharedCoreStyles";

declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";
