export type MountOptions = {
  debug?: Debug;
};

export type UnMountOptions = {
  debug?: Debug;
};

export type Debug = boolean;

export type Mount = (el: HTMLElement, options?: MountOptions) => void;

export type UnMount = (options?: UnMountOptions) => void;

export const mount: Mount;
export const unMount: UnMount;
