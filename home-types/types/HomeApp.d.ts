export type Debug = boolean;
export type Callbacks = { navigateToProductDetail: (id: string) => void };

export type MountOptions = {
  callbacks: Callbacks;
  debug?: Debug;
};

export type UnMountOptions = {
  debug?: Debug;
};

export type Mount = (el: HTMLElement, options: MountOptions) => void;

export type UnMount = (options?: UnMountOptions) => void;

export const mount: Mount;
export const unMount: UnMount;
