import { DressStyle } from "@src/entities/entities";

import { Locale } from "shared_core/SharedCoreEntities";

export interface DefaultProps {
  className?: string;
  children?: React.ReactNode;
  language?: Locale;
}

export interface GallerySectionLayoutProps extends DefaultProps {
  title: string;
  btnText: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IllustrationWithTitleProps extends DefaultProps {
  type: DressStyle;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface CarrouselWithTitleAndArrowsProps extends DefaultProps {}
