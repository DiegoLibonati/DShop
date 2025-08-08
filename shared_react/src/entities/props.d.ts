import { SVGProps } from "react";

import { FooterLinks, Language } from "@src/entities/entities";

export interface DefaultProps {
  idRoot?: string;
  className?: string;
  children?: React.ReactNode;
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
  links: FooterLinks[];
  language?: Language;
  instagram?: string;
  facebook?: string;
  twitter?: string;
  onSubmitSubscribe: (inputValue: string) => void;
}

export interface SubscribeNewsletterProps extends DefaultProps {
  title: string;
  submitLabel: string;
  language?: Language;
  onSubmit: (inputValue: string) => void;
}
