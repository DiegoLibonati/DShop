import type { Component } from "./SharedAngularEnums.d";

export type Debug = boolean;

export type MountOptions = {
  idComponent: Component;
  props?: Record<string, unknown>;
  debug?: Debug;
};

export type UnMountOptions = {
  debug?: Debug;
};

export type MountComponent = (el: HTMLElement, options: MountOptions) => void;

export type UnMountComponent = (
  idRoot: string,
  options?: UnMountOptions
) => void;

export const mountComponent: MountComponent;
export const unMountComponent: UnMountComponent;
