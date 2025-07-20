import { Component, Input, OnInit } from "@angular/core";

import { SvgHamburgerMenuProps } from "@src/app/entities/props";

import template from "@src/app/components/svgs/svg-hamburger-menu/svg-hamburger-menu.component.html";
import styles from "@src/app/components/svgs/svg-hamburger-menu/svg-hamburger-menu.component.css";

@Component({
  selector: "svg-hamburger-menu",
  template: template,
  styles: [styles],
})
export class SvgHamburgerMenuComponent implements OnInit {
  private componentName: string = "svg-hamburger-menu";

  @Input() className: SvgHamburgerMenuProps["className"] = "";

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
