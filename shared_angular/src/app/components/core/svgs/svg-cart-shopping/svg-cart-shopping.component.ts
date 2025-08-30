import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from "@angular/core";

import template from "@src/app/components/core/svgs/svg-cart-shopping/svg-cart-shopping.component.html";
import styles from "@src/app/components/core/svgs/svg-cart-shopping/svg-cart-shopping.component.css";

import { mountComponent, unMountComponent } from "shared_core/SharedCore";
import { Component as ComponentSharedCore } from "shared_core/SharedCoreEnums";
import { SvgCartShoppingProps } from "shared_core/SharedCoreProps";
import { MountOptions } from "shared_core/SharedCoreEntities";

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
    const options: MountOptions = {
      idComponent: ComponentSharedCore.SvgCartShopping,
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
