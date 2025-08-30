import type React from "react";

import type { Locale, Clothes } from "shared_core/SharedCoreEntities";

export interface DefaultProps {
  idRoot: string;
  className?: string;
  classNameWrapper?: string;
  children?: React.ReactNode;
  language?: Locale;
  html?: string;
}

export interface ItemClothesProps extends DefaultProps {
  src: string;
  name: string;
  rate: number;
  price: number;
  discount: number;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export interface FooterWithSubscribeNewsletterProps extends DefaultProps {
  title: string;
  description: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
  onSubmitSubscribe: (inputValue: string) => void;
}

export interface SubscribeNewsletterProps extends DefaultProps {
  title: string;
  submitLabel: string;
  onSubmit: (inputValue: string) => void;
}

export interface LoaderScreenProps extends DefaultProps {}

export interface GalleryClothesProps extends DefaultProps {
  title: string;
  clothes: Clothes[];
  onClothesClick: (c: Clothes) => void;
}
