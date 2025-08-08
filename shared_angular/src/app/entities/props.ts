import { HeaderOption, Language } from "@src/app/entities/entities";

interface DefaultProps {
  idRoot?: string;
  language?: Language;
  className?: string;
}

export interface HeaderProps extends DefaultProps {
  name: string;
  options: HeaderOption[];
  onClickMenu: (e: MouseEvent) => void;
  onSubmitSearch: (e: Event, searchInputValue: string) => void;
  onClickSearch: (e: MouseEvent) => void;
  onClickCart: (e: MouseEvent) => void;
}

export interface ReviewCustomerProps extends DefaultProps {
  name: string;
  description: string;
  maxStars: number;
  valueStars: number;
}
