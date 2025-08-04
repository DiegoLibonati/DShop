import { HeaderOption, Language } from "@src/app/entities/entities";

interface DefaultProps {
  idRoot?: string;
  className?: string;
  language?: Language;
}

export interface HeaderProps extends DefaultProps {
  name: string;
  options: HeaderOption[];
  onClickMenu: (e: MouseEvent) => void;
  onSubmitSearch: (e: Event, searchInputValue: string) => void;
  onClickSearch: (e: MouseEvent) => void;
  onClickCart: (e: MouseEvent) => void;
}

export interface ButtonWhiteProps extends DefaultProps {
  ariaLabel: string;
  rounded?: boolean;
  borderGray?: boolean;
  textContent?: string;
  onClick?: (e: MouseEvent) => void;
}

export interface ReviewCustomerProps extends DefaultProps {
  name: string;
  description: string;
  maxStars: number;
  valueStars: number;
}
