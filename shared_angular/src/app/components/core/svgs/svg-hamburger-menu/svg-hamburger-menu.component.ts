import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from "@angular/core";

import template from "@src/app/components/core/svgs/svg-hamburger-menu/svg-hamburger-menu.component.html";
import styles from "@src/app/components/core/svgs/svg-hamburger-menu/svg-hamburger-menu.component.css";

import { mountComponent, unMountComponent } from "shared_core/SharedCore";
import { Component as ComponentSharedCore } from "shared_core/SharedCoreEnums";
import { SvgHamburgerMenuProps } from "shared_core/SharedCoreProps";
import { MountOptions } from "shared_core/SharedCoreEntities";

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
  @Input() classNameWrapper: SvgHamburgerMenuProps["classNameWrapper"] = "";

  ngAfterViewInit(): void {
    const options: MountOptions = {
      idComponent: ComponentSharedCore.SvgHamburgerMenu,
      props: {
        idRoot: this.idRoot,
        className: this.className,
      },
    };

    mountComponent(this.ref!.nativeElement, options);
  }

  ngOnDestroy(): void {
    unMountComponent(this.idRoot);
  }

  viewProps(): void {
    console.log(`Props of ${this.componentName}:
      - ref: ${this.ref}
      - idRoot: ${this.idRoot}
      - className: ${this.className}
      - classNameWrapper: ${this.classNameWrapper}
    `);
  }

  // Defaults Fns
}
