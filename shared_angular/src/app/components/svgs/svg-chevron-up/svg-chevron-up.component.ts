import { Component, Input, OnInit } from "@angular/core";

import { SvgChevronUpProps } from "@src/app/entities/props";

import template from "@src/app/components/svgs/svg-chevron-up/svg-chevron-up.component.html";
import styles from "@src/app/components/svgs/svg-chevron-up/svg-chevron-up.component.css";

@Component({
  selector: "svg-chevron-up",
  template: template,
  styles: [styles],
})
export class SvgChevronUpComponent implements OnInit {
  private componentName: string = "svg-chevron-up";

  @Input() className: SvgChevronUpProps["className"] = "";

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
