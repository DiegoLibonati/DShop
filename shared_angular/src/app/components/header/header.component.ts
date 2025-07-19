import { Component, Input, OnInit } from "@angular/core";

import template from "@src/app/components/header/header.component.html";
import styles from "@src/app/components/header/header.component.css";

@Component({
  selector: "app-header",
  template: template,
  styles: [styles],
})
export class HeaderComponent implements OnInit {
  @Input() className: string = "";

  private componentName: string = "header";

  ngOnInit(): void {
    this.viewProps();
  }

  viewProps(): void {
    console.log(`Props of ${this.componentName}: 
      - className: ${this.className}`);
  }
}
