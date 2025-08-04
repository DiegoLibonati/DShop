import { IllustrationType } from "@src/entities/entities";

export interface DefaultProps {
  className?: string;
  children?: React.ReactNode;
}

export interface GallerySectionLayoutProps extends DefaultProps {
  title: string;
  btnText: string;
  onClick: (e: MouseEvent) => void;
}

export interface IllustrationWithTitleProps extends DefaultProps {
  type: IllustrationType;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface CarrouselWithTitleAndArrowsProps extends DefaultProps {


}
