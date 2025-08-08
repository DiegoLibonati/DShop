import React from "react";
import { createRoot, Root } from "react-dom/client";

import {
  AnchorCircularProps,
  ButtonBlackProps,
  ButtonWhiteProps,
  ImageWithBackgroundColorProps,
  InformationItemClothesProps,
  RateStarsProps,
  SliderSnapXProps,
  SvgArrowLeftProps,
  SvgArrowRightProps,
  SvgCartShoppingProps,
  SvgChevronDownProps,
  SvgChevronUpProps,
  SvgFacebookProps,
  SvgHamburgerMenuProps,
  SvgInstagramProps,
  SvgSearchProps,
  SvgSkyStarProps,
  SvgStarToFillProps,
  SvgTwitterProps,
} from "@src/entities/props";
import { Component } from "@src/entities/enum.d";

import { App } from "@src/App";
import { SvgStarToFill } from "@src/components/Svgs/SvgStarToFill/SvgStarToFill";
import { SvgChevronDown } from "@src/components/Svgs/SvgChevronDown/SvgChevronDown";
import { SvgChevronUp } from "@src/components/Svgs/SvgChevronUp/SvgChevronUp";
import { SvgHamburgerMenu } from "@src/components/Svgs/SvgHamburgerMenu/SvgHamburgerMenu";
import { SvgCartShopping } from "@src/components/Svgs/SvgCartShopping/SvgCartShopping";
import { SvgSearch } from "@src/components/Svgs/SvgSearch/SvgSearch";
import { SvgSkyStar } from "@src/components/Svgs/SvgSkyStar/SvgSkyStar";
import { SvgArrowLeft } from "@src/components/Svgs/SvgArrowLeft/SvgArrowLeft";
import { SvgArrowRight } from "@src/components/Svgs/SvgArrowRight/SvgArrowRight";
import { SvgTwitter } from "@src/components/Svgs/SvgTwitter/SvgTwitter";
import { SvgFacebook } from "@src/components/Svgs/SvgFacebook/SvgFacebook";
import { SvgInstagram } from "@src/components/Svgs/SvgInstagram/SvgInstagram";
import { ButtonBlack } from "@src/components/Buttons/ButtonBlack/ButtonBlack";
import { ButtonWhite } from "@src/components/Buttons/ButtonWhite/ButtonWhite";
import { ImageWithBackgroundColor } from "@src/components/Images/ImageWithBackgroundColor/ImageWithBackgroundColor";
import { InformationItemClothes } from "@src/components/Informations/InformationItemClothes/InformationItemClothes";
import { RateStars } from "@src/components/Ratings/RateStars/RateStars";
import { SliderSnapX } from "@src/components/Sliders/SliderSnapX/SliderSnapX";
import { AnchorCircular } from "@src/components/Anchors/AnchorCircular/AnchorCircular";

import { getFinalPriceByDiscount } from "@src/helpers/getFinalPriceByDiscount";
import { getIdsByLength } from "@src/helpers/getIdsByLength";

import { IS_DEV } from "@src/constants/envs";

const roots: Record<string, Root> = {};
const titleMfe: string = "Shared Core";

export const getComponentById = (
  idComponent: Component,
  props:
    | Record<string, unknown>
    | SvgStarToFillProps
    | SvgSearchProps
    | SvgCartShoppingProps
    | SvgSkyStarProps
    | SvgArrowLeftProps
    | SvgArrowRightProps
    | SvgTwitterProps
    | SvgFacebookProps
    | SvgInstagramProps
    | ButtonBlackProps
    | ButtonWhiteProps
    | ImageWithBackgroundColorProps
    | InformationItemClothesProps
    | RateStarsProps
    | SliderSnapXProps
    | AnchorCircularProps
): React.ReactNode => {
  return {
    [Component.AppTest]: <App></App>,
    [Component.SvgStarToFill]: (
      <SvgStarToFill {...(props as SvgStarToFillProps)} />
    ),
    [Component.SvgCartShopping]: (
      <SvgCartShopping {...(props as SvgCartShoppingProps)} />
    ),
    [Component.SvgChevronDown]: (
      <SvgChevronDown {...(props as SvgChevronDownProps)} />
    ),
    [Component.SvgChevronUp]: (
      <SvgChevronUp {...(props as SvgChevronUpProps)} />
    ),
    [Component.SvgHamburgerMenu]: (
      <SvgHamburgerMenu {...(props as SvgHamburgerMenuProps)} />
    ),
    [Component.SvgSearch]: <SvgSearch {...(props as SvgSearchProps)} />,
    [Component.SvgSkyStar]: <SvgSkyStar {...(props as SvgSkyStarProps)} />,
    [Component.SvgArrowLeft]: (
      <SvgArrowLeft {...(props as SvgArrowLeftProps)} />
    ),
    [Component.SvgArrowRight]: (
      <SvgArrowRight {...(props as SvgArrowRightProps)} />
    ),
    [Component.SvgTwitter]: <SvgTwitter {...(props as SvgTwitterProps)} />,
    [Component.SvgFacebook]: <SvgFacebook {...(props as SvgFacebookProps)} />,
    [Component.SvgInstagram]: (
      <SvgInstagram {...(props as SvgInstagramProps)} />
    ),
    [Component.ButtonBlack]: <ButtonBlack {...(props as ButtonBlackProps)} />,
    [Component.ButtonWhite]: <ButtonWhite {...(props as ButtonWhiteProps)} />,
    [Component.ImageWithBackgroundColor]: (
      <ImageWithBackgroundColor {...(props as ImageWithBackgroundColorProps)} />
    ),
    [Component.InformationItemClothes]: (
      <InformationItemClothes {...(props as InformationItemClothesProps)} />
    ),
    [Component.RateStars]: <RateStars {...(props as RateStarsProps)} />,
    [Component.SliderSnapX]: <SliderSnapX {...(props as SliderSnapXProps)} />,
    [Component.AnchorCircular]: (
      <AnchorCircular {...(props as AnchorCircularProps)} />
    ),
  }[idComponent];
};

const mountComponent = (
  el: HTMLDivElement,
  idComponent: Component,
  props: Record<string, unknown> = {},
  debug: boolean = false
) => {
  // console.log("Element:", el);
  // console.log("Id Componente a renderizar: ", idComponent);
  // console.log("Props: ", props);

  if (!IS_DEV && idComponent === Component.AppTest) {
    throw new Error(
      `[mountComponent - ${titleMfe}] You cannot render this component. Component: ${idComponent}`
    );
  }

  const idRootComponent = props?.idRoot as string;

  if (!idRootComponent) {
    throw new Error(
      `[mountComponent - ${titleMfe}] You must provide an 'idRoot' to identify the component`
    );
  }

  const reactNode = getComponentById(idComponent, props);
  const rootExists = roots[idRootComponent];

  if (rootExists) {
    rootExists.render(reactNode);
    return;
  }

  const root = createRoot(el);

  root.render(reactNode);
  roots[idRootComponent] = root;

  if (IS_DEV === "development" && debug) {
    console.log(`[mountComponent - ${titleMfe}] mounting ${idRootComponent}`);
  }
};

const unMountComponent = (idRoot: string, debug: boolean = false) => {
  const rootExists = roots[idRoot];

  if (!rootExists) {
    throw new Error(
      `[unMountComponent - ${titleMfe}] No component found with idRoot: ${idRoot}`
    );
  }

  rootExists.unmount();
  delete roots[idRoot];

  if (IS_DEV === "development" && debug) {
    console.log(`[unMountComponent - ${titleMfe}] Unmounting ${idRoot}`);
  }
};

// Dev
if (IS_DEV === "development") {
  const devRoot = document.getElementById(
    "_shared-core-dev-root"
  ) as HTMLDivElement;

  if (devRoot) {
    mountComponent(devRoot, Component.AppTest, { idRoot: "Rootcito APP" });
  }
}

export {
  mountComponent,
  unMountComponent,
  getFinalPriceByDiscount,
  getIdsByLength,
};
