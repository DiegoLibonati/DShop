import { Color, Image, Size } from "@src/entities/entities";

import { Locale } from "shared_core/SharedCoreEntities";

export interface DefaultProps {
  className?: string;
  language?: Locale;
}

export interface AppProps extends DefaultProps {
  idProduct: string;
}

export interface ImageViewerArticleProps extends DefaultProps {
  images: Image[];
}

export interface ProductInformationArticleProps extends DefaultProps {
  name: string;
  rate: number;
  price: number;
  discount: number;
  description: string;
  colors: Color[];
  sizes: Size[];
}
