import { Component, Input, OnInit } from "@angular/core";

import { SvgCartShoppingProps } from "@src/app/entities/props";

import template from "@src/app/components/svgs/svg-cart-shopping/svg-cart-shopping.component.html";
import styles from "@src/app/components/svgs/svg-cart-shopping/svg-cart-shopping.component.css";

@Component({
  selector: "svg-cart-shopping",
  template: template,
  styles: [styles],
})
export class SvgCartShoppingComponent implements OnInit {
  private componentName: string = "svg-cart-shopping";

  @Input() className: SvgCartShoppingProps["className"] = "";

  ngOnInit(): void {
    // this.viewProps();
  }

  viewProps(): void {
    console.log(`Props of ${this.componentName}:
      - className: ${this.className}
    `);
  }

  // Defaults Fns
}
