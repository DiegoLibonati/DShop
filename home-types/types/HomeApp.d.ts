import { Clothes, Review } from "shared_core/SharedCoreEntities";

interface AppProps {
  callbacks: Callbacks;
  content: Content;
}

export type Debug = boolean;
export type Callbacks = { navigateToProductDetail: (id: string) => void };
export type Content = {
  brands: string[];
  newArrivals: Clothes[];
  topSellings: Clothes[];
  reviews: Review[];
};

export type MountOptions = {
  props: AppProps;
  debug?: Debug;
};

export type UnMountOptions = {
  debug?: Debug;
};

export type Mount = (el: HTMLElement, options: MountOptions) => void;

export type UnMount = (options?: UnMountOptions) => void;

export const mount: Mount;
export const unMount: UnMount;
