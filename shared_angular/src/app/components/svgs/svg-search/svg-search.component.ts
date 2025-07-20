import { Component, Input, OnInit } from "@angular/core";

import { SvgSearchProps } from "@src/app/entities/props";

import template from "@src/app/components/svgs/svg-search/svg-search.component.html";
import styles from "@src/app/components/svgs/svg-search/svg-search.component.css";

@Component({
  selector: "svg-search",
  template: template,
  styles: [styles],
})
export class SvgSearchComponent implements OnInit {
  private componentName: string = "svg-search";

  @Input() className: SvgSearchProps["className"] = "";

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
