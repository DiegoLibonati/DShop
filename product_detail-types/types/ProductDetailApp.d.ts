import { Product, Clothes } from "shared_core/SharedCoreEntities";

interface AppProps {
  content: Content;
}

export type MountOptions = {
  debug?: Debug;
  props: AppProps;
};

export type UnMountOptions = {
  debug?: Debug;
};

export type Debug = boolean;

export type Content = {
  product: Product;
  clothesAlsoLike: Clothes[];
};

export type Mount = (el: HTMLElement, options?: MountOptions) => void;

export type UnMount = (options?: UnMountOptions) => void;

export const mount: Mount;
export const unMount: UnMount;
