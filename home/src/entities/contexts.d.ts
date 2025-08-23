import {
  Brand,
  Callbacks,
  Clothes,
  DressStyle,
  MountOptions,
  Review,
} from "@src/entities/entities";

export type ConfigContext = {
  callbacks: Callbacks | null;
  handleSetInitialConfig: (options: Pick<MountOptions, "callbacks">) => void;
};
export interface ConfigProviderProps {
  children: React.ReactNode;
}

export type BrandsContext = {
  brands: Brand[] | null;
  handleSetBrands: (brands: Brand[] | null) => void;
};
export interface BrandsProviderProps {
  children: React.ReactNode;
}

export type NewArrivalsContext = {
  newArrivals: Clothes[] | null;
  handleSetNewArrivals: (newArrivals: Clothes[] | null) => void;
};
export interface NewArrivalsProviderProps {
  children: React.ReactNode;
}

export type TopSellingsContext = {
  topSellings: Clothes[] | null;
  handleSetTopSellings: (topSellings: Clothes[] | null) => void;
};
export interface TopSellingsProviderProps {
  children: React.ReactNode;
}

export type DressStylesContext = {
  dressStyles: DressStyle[] | null;
  handleSetDressStyles: (dressStyles: DressStyle[] | null) => void;
};
export interface DressStylesProviderProps {
  children: React.ReactNode;
}

export type HappyCustomersContext = {
  reviews: Review[] | null;
  handleSetReviews: (reviews: Review[] | null) => void;
};
export interface HappyCustomersProviderProps {
  children: React.ReactNode;
}
