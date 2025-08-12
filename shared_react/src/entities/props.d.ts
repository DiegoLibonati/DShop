import { SVGProps } from "react";

import { Locale } from "shared_core/SharedCoreEntities";

export interface DefaultProps {
  idRoot?: string;
  className?: string;
  children?: React.ReactNode;
  language?: Locale;
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
