import { SVGProps } from "react";

export interface DefaultProps {
  idRoot?: string;
  className?: string;
  children?: React.ReactNode;
}

export interface SvgStarToFillProps
  extends SVGProps<SVGSVGElement>,
    DefaultProps {
  outColor: string;
  inColor: string;
  fill: number;
}

export interface SvgSearchProps extends SVGProps<SVGSVGElement>, DefaultProps {}

export interface SvgHamburgerMenuProps
  extends SVGProps<SVGSVGElement>,
    DefaultProps {}

export interface SvgChevronUpProps
  extends SVGProps<SVGSVGElement>,
    DefaultProps {}

export interface SvgChevronDownProps
  extends SVGProps<SVGSVGElement>,
    DefaultProps {}

export interface SvgCartShoppingProps
  extends SVGProps<SVGSVGElement>,
    DefaultProps {}

export interface SvgSkyStarProps
  extends SVGProps<SVGSVGElement>,
    DefaultProps {}

export interface SvgArrowLeftProps
  extends SVGProps<SVGSVGElement>,
    DefaultProps {}

export interface SvgArrowRightProps
  extends SVGProps<SVGSVGElement>,
    DefaultProps {}
