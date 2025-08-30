import { Content } from "@src/entities/entities";

import {
  Locale,
  Clothes,
  Color,
  Image,
  Product,
  Size,
} from "shared_core/SharedCoreEntities";

export interface DefaultProps {
  className?: string;
  language?: Locale;
  html?: string;
}

export interface AppProps extends DefaultProps {
  content: Content;
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
