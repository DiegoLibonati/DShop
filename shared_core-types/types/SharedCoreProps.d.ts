import { SVGProps } from "react";

import { Locale } from "shared_core/SharedCoreEntities";

export interface DefaultProps {
  idRoot: string;
  className?: string;
  classNameWrapper?: string;
  children?: React.ReactNode;
  language?: Locale;
  html?: string;
}

export interface DefaultSvgProps {
  width?: number;
  height?: number;
}

export interface ButtonBlackProps extends DefaultProps {
  ariaLabel: string;
  rounded?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ImageWithBackgroundColorProps extends DefaultProps {
  src: string;
  alt: string;
  bgColor: string;
  isActive: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export interface InformationItemClothesProps extends DefaultProps {
  name: string;
  rate: number;
  price: number;
  discount: number;
  description?: string;
}

export interface RateStarsProps extends DefaultProps {
  max: number;
  value: number;
  inColor: string;
  outColor: string;
  classNameStar?: string;
}

export interface SliderSnapXProps extends DefaultProps {}

export interface ButtonWhiteProps extends DefaultProps {
  ariaLabel: string;
  rounded?: boolean;
  borderGray?: boolean;
  type?: "button" | "reset" | "submit";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface AnchorCircularProps extends DefaultProps {
  ariaLabel: string;
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  borderGray?: boolean;
}

export interface MenuScreenWhiteProps extends DefaultProps {}

export interface FormSearchProps extends DefaultProps {
  placeholder?: string;
  onSubmit: (inputValue: string) => void;
}

export interface ColorCircleProps extends DefaultProps {
  color: string;
  isActive?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export interface TagSimpleProps extends DefaultProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export interface CounterWithActionsProps extends DefaultProps {
  limit?: number;
  onChange: (value: number) => void;
}

export interface SkeletonShimmerProps extends DefaultProps {
  rounded?: boolean;
}

export interface LoaderCircularProps extends DefaultProps {}

export interface SvgStarToFillProps
  extends SVGProps<SVGSVGElement>,
    DefaultProps,
    DefaultSvgProps {
  outColor: string;
  inColor: string;
  fill: string;
}

export interface SvgSearchProps
  extends SVGProps<SVGSVGElement>,
    DefaultProps,
    DefaultSvgProps {}

export interface SvgHamburgerMenuProps
  extends SVGProps<SVGSVGElement>,
    DefaultProps,
    DefaultSvgProps {}

export interface SvgChevronUpProps
  extends SVGProps<SVGSVGElement>,
    DefaultProps,
    DefaultSvgProps {}

export interface SvgChevronDownProps
  extends SVGProps<SVGSVGElement>,
    DefaultProps,
    DefaultSvgProps {}

export interface SvgCartShoppingProps
  extends SVGProps<SVGSVGElement>,
    DefaultProps,
    DefaultSvgProps {}

export interface SvgSkyStarProps
  extends SVGProps<SVGSVGElement>,
    DefaultProps,
    DefaultSvgProps {}

export interface SvgArrowLeftProps
  extends SVGProps<SVGSVGElement>,
    DefaultProps,
    DefaultSvgProps {}

export interface SvgArrowRightProps
  extends SVGProps<SVGSVGElement>,
    DefaultProps,
    DefaultSvgProps {}

export interface SvgTwitterProps
  extends SVGProps<SVGSVGElement>,
    DefaultProps,
    DefaultSvgProps {}

export interface SvgFacebookProps
  extends SVGProps<SVGSVGElement>,
    DefaultProps,
    DefaultSvgProps {}

export interface SvgInstagramProps
  extends SVGProps<SVGSVGElement>,
    DefaultProps,
    DefaultSvgProps {}

export interface SvgCloseProps
  extends SVGProps<SVGSVGElement>,
    DefaultProps,
    DefaultSvgProps {}

export interface SvgCheckProps
  extends SVGProps<SVGSVGElement>,
    DefaultProps,
    DefaultSvgProps {}
