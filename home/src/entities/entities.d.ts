export type MountOptions = {
  callbacks: Callbacks;
  debug?: Debug;
};

export type UnMountOptions = {
  debug?: Debug;
};

export type Debug = boolean;

export type Callbacks = { navigateToProductDetail: (id: string) => void };

export type Brand = string;

export type Clothes = {
  id: string;
  src: string;
  name: string;
  rate: number;
  price: number;
  discount: number;
};

export type DressStyle = "casual" | "formal" | "party" | "gym";

export type Review = {
  id: string;
  name: string;
  description: string;
  value: number;
};
