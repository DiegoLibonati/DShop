import type { Component } from "./SharedReactEnums.d";

export type Debug = boolean;

export type MountOptions = {
  idComponent: Component;
  props?: Record<string, unknown>;
  debug?: Debug;
};

export type UnMountOptions = {
  debug?: Debug;
};

export type MountComponent = (
  el: HTMLDivElement,
  options: MountOptions
) => void;

export type UnMountComponent = (
  idRoot: string,
  options?: UnMountOptions
) => void;

export const mountComponent: MountComponent;
export const unMountComponent: UnMountComponent;
