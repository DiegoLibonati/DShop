import type { MountOptions, UnMountOptions } from "./SharedCoreEntities.d";
import type { Component } from "./SharedCoreEnums.d";

export type MountComponent = (
  el: HTMLDivElement,
  idComponent: Component,
  props?: Record<string, unknown>,
  options?: MountOptions
) => void;

export type UnMountComponent = (
  idRoot: string,
  options?: UnMountOptions
) => void;

export type GetIdsByLength = (length: number) => string[];

export type GetFinalPriceByDiscount = (
  price: number,
  discount: number
) => number;

export const mountComponent: MountComponent;
export const unMountComponent: UnMountComponent;
export const getIdsByLength: GetIdsByLength;
export const getFinalPriceByDiscount: GetFinalPriceByDiscount;
