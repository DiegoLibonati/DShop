import type { Component } from "./SharedAngularEnums.d";

export type Debug = boolean;

export type MountOptions = {
  debug?: Debug;
};

export type UnMountOptions = {
  debug?: Debug;
};

export type MountComponent = (
  el: HTMLElement,
  id: Component,
  props?: Record<string, unknown>,
  options?: MountOptions
) => void;

export type UnMountComponent = (
  idRoot: string,
  options?: UnMountOptions
) => void;

export const mountComponent: MountComponent;
export const unMountComponent: UnMountComponent;
