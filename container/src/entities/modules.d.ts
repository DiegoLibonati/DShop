declare module "home/HomeApp" {
  export const mount: (el: HTMLElement) => void;
}

declare module "shared_angular/SharedAngular" {
  import { Component } from "shared_angular/SharedAngularEnums";

  export const mountComponent: (
    el: HTMLElement,
    id: Component,
    props: Record<string, unknown> = {}
  ) => void;
}

declare module "shared_angular/SharedAngularEnums" {
  export enum Component {
    Header = "header",
  }
}

declare module "shared_angular/SharedAngularProps" {
  import { HeaderOption } from "shared_angular/SharedAngularEntities";

  export interface DefaultProps {
    idRoot: string;
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
}

declare module "shared_angular/SharedAngularEntities" {
  export type HeaderOption = {
    id: string;
    name: string;
    onClick: (e: MouseEvent) => void;
    isMenu?: boolean;
    open?: boolean;
  };
}

declare module "shared_utils/SharedUtils" {
  export const getIdsByLength: (length: number) => string[];
}

declare module "shared_utils/SharedUtilsStyles";
