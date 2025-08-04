import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from "@angular/core";

import template from "@src/app/components/svgs/svg-cart-shopping/svg-cart-shopping.component.html";
import styles from "@src/app/components/svgs/svg-cart-shopping/svg-cart-shopping.component.css";

import { mountComponent, unMountComponent } from "shared_utils/SharedUtils";
import { Component as ComponentSharedUtils } from "shared_utils/SharedUtilsEnums";
import { SvgCartShoppingProps } from "shared_utils/SharedUtilsProps";

@Component({
  selector: "svg-cart-shopping",
  template: template,
  styles: [styles],
})
export class SvgCartShoppingComponent implements AfterViewInit, OnDestroy {
  @ViewChild("svgcartshopping") ref: ElementRef | null = null;

  private componentName: string = "svg-cart-shopping";

  @Input() idRoot: SvgCartShoppingProps["idRoot"] = "";
  @Input() className: SvgCartShoppingProps["className"] = "";
  @Input() classNameWrapper: SvgCartShoppingProps["classNameWrapper"] = "";

  ngAfterViewInit(): void {
    mountComponent(
      this.ref!.nativeElement,
      ComponentSharedUtils.SvgCartShopping,
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
