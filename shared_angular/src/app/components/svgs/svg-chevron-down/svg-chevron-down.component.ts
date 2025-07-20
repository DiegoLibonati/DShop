import { Component, Input, OnInit } from "@angular/core";

import { SvgChevronDownProps } from "@src/app/entities/props";

import template from "@src/app/components/svgs/svg-chevron-down/svg-chevron-down.component.html";
import styles from "@src/app/components/svgs/svg-chevron-down/svg-chevron-down.component.css";

@Component({
  selector: "svg-chevron-down",
  template: template,
  styles: [styles],
})
export class SvgChevronDownComponent implements OnInit {
  private componentName: string = "svg-chevron-down";

  @Input() className: SvgChevronDownProps["className"] = "";

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
