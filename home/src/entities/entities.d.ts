export type Brand = string;

export type Clothes = {
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
