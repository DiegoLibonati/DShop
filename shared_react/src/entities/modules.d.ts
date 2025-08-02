declare module "shared_utils/SharedUtils" {
  import { Component } from "shared_utils/SharedUtilsEnums";

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

declare module "shared_utils/SharedUtilsEnums" {
  export enum Component {
    SvgStarToFill = "svg-star-to-fill",
  }
}

declare module "shared_utils/SharedUtilsProps" {
  import React, { SVGProps } from "react";

  export interface DefaultProps {
    idRoot: string;
    className?: string;
    children?: React.ReactNode;
  }

  export interface SvgStarToFillProps
    extends SVGProps<SVGSVGElement>,
      DefaultProps {
    outColor: string;
    inColor: string;
    fill: number;
  }
}

declare module "shared_utils/SharedUtilsStyles";

declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";
