import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from "@angular/core";

import template from "@src/app/components/svgs/svg-hamburger-menu/svg-hamburger-menu.component.html";
import styles from "@src/app/components/svgs/svg-hamburger-menu/svg-hamburger-menu.component.css";

import { mountComponent, unMountComponent } from "shared_utils/SharedUtils";
import { Component as ComponentSharedUtils } from "shared_utils/SharedUtilsEnums";
import { SvgHamburgerMenuProps } from "shared_utils/SharedUtilsProps";

@Component({
  selector: "svg-hamburger-menu",
  template: template,
  styles: [styles],
})
export class SvgHamburgerMenuComponent implements AfterViewInit, OnDestroy {
  @ViewChild("svghamburgermenu") ref: ElementRef | null = null;

  private componentName: string = "svg-hamburger-menu";

  @Input() idRoot: SvgHamburgerMenuProps["idRoot"] = "";
  @Input() className: SvgHamburgerMenuProps["className"] = "";

  get classNameWrapper(): string {
    return this.className ? `${this.className}-wrapper` : "";
  }

  ngAfterViewInit(): void {
    mountComponent(
      this.ref!.nativeElement,
      ComponentSharedUtils.SvgHamburgerMenu,
      {
        idRoot: this.idRoot,
        className: this.className,
      }
    );
  }

  ngOnDestroy(): void {
    unMountComponent(this.idRoot);
  }

  viewProps(): void {
    console.log(`Props of ${this.componentName}:
      - ref: ${this.ref}
      - idRoot: ${this.idRoot}
      - className: ${this.className}
    `);
  }

  // Defaults Fns
}
