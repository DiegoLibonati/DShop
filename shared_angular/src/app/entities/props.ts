import { Locale } from "shared_core/SharedCoreEntities";

interface DefaultProps {
  idRoot?: string;
  language?: Locale;
  className?: string;
  children?: string;
}

export interface HeaderProps extends DefaultProps {
  name: string;
  isFixed?: boolean;
  onClickMenu: (e: MouseEvent) => void;
  onClickTitle: (e: MouseEvent) => void;
  onSubmitSearch: (inputValue: string) => void;
  onClickSearch: (e: MouseEvent) => void;
  onClickCart: (e: MouseEvent) => void;
}

export interface ReviewCustomerProps extends DefaultProps {
  name: string;
  description: string;
  maxStars: number;
  valueStars: number;
}

export interface NotificationBarProps extends DefaultProps {
  onClose: () => void;
}
