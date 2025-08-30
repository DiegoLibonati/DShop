import { Component } from "@src/app/entities/enum";

export type MountOptions = {
  idComponent: Component;
  props?: Record<string, unknown>;
  debug?: Debug;
};

export type UnMountOptions = {
  debug?: Debug;
};

export type Debug = boolean;
