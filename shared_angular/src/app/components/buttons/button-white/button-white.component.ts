import { Component, Input, OnInit } from "@angular/core";

import { ButtonWhiteProps } from "@src/app/entities/props";

import template from "@src/app/components/buttons/button-white/button-white.component.html";
import styles from "@src/app/components/buttons/button-white/button-white.component.css";

@Component({
  selector: "app-button-white",
  template: template,
  styles: [styles],
})
export class ButtonWhiteComponent implements OnInit {
  @Input() rounded: ButtonWhiteProps["rounded"] = false;
  @Input() borderGray: ButtonWhiteProps["borderGray"] = false;
  @Input() ariaLabel: ButtonWhiteProps["ariaLabel"] = "";
  @Input() className: ButtonWhiteProps["className"] = "";

  @Input() onClick: ButtonWhiteProps["onClick"] =
    this.onDefaultClick.bind(this);

  private componentName: string = "app-button-white";

  ngOnInit(): void {
    // this.viewProps();
  }

  viewProps(): void {
    console.log(`Props of ${this.componentName}:
      - rounded: ${this.rounded}
      - borderGray: ${this.borderGray}
      - ariaLabel: ${this.ariaLabel}
      - className: ${this.className}
      - onClick: ${this.onClick}`);
  }

  // Defaults Fns

  onDefaultClick(e: MouseEvent): void {
    console.log("Executed in shared_angular - Click: ", this.componentName, e);
  }
}
