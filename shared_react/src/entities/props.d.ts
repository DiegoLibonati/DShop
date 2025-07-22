import { SVGProps } from "react";

export interface DefaultProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonBlackProps extends DefaultProps {
  ariaLabel: string;
  rounded?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ItemClothesProps extends DefaultProps {
  src: string;
  name: string;
  rate: number;
  price: number;
  discount: number;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export interface RateStarsProps extends DefaultProps {
  max: number;
  value: number;
  outColor: string;
  inColor: string;
}

export interface SliderSnapXProps extends DefaultProps {}

export interface SvgStarToFillProps extends SVGProps<SVGElement> {
  outColor: string;
  inColor: string;
  fill: number;
}
