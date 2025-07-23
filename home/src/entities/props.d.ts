export interface DefaultProps {
  className?: string;
  children?: React.ReactNode;
}

export interface GallerySectionLayoutProps extends DefaultProps {
  title: string;
  btnText: string;
  onClick: (e: MouseEvent) => void;
}
