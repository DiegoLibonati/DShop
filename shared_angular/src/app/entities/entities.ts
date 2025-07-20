export type HeaderOption = {
  id: string;
  name: string;
  onClick: (e: MouseEvent) => void;
  isMenu?: boolean;
  open?: boolean;
};
