import { Callbacks, Content, DressStyle } from "@src/entities/entities";

import { Locale } from "shared_core/SharedCoreEntities";

export interface DefaultProps {
  className?: string;
  children?: React.ReactNode;
  language?: Locale;
  html?: string;
}

export interface AppProps {
  callbacks: Callbacks;
  content: Content;
}

export interface GallerySectionLayoutProps extends DefaultProps {
  btnText: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IllustrationWithTitleProps extends DefaultProps {
  type: DressStyle;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface CarrouselWithTitleAndArrowsProps extends DefaultProps {}
