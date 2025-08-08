import { Component, Input, OnInit } from "@angular/core";

import { ReviewCustomerProps } from "@src/app/entities/props";

import template from "@src/app/components/composed/reviews/review-customer/review-customer.component.html";
import styles from "@src/app/components/composed/reviews/review-customer/review-customer.component.css";

import { getIdsByLength } from "shared_core/SharedCore";

@Component({
  selector: "app-review-customer",
  template: template,
  styles: [styles],
})
export class ReviewCustomerComponent implements OnInit {
  @Input() name: ReviewCustomerProps["name"] = "";
  @Input() description: ReviewCustomerProps["description"] = "";
  @Input() maxStars: ReviewCustomerProps["maxStars"] = 5;
  @Input() valueStars: ReviewCustomerProps["valueStars"] = 0;
  @Input() className: ReviewCustomerProps["className"] = "";

  private componentName: string = "app-review-customer";

  public rootIds = getIdsByLength(1);
  public inColorStars: string = "#FFC633";
  public outColorStars: string = "#FFFFFF";

  ngOnInit(): void {}

  viewProps(): void {
    console.log(`Props of ${this.componentName}:
      - name: ${this.name}
      - description: ${this.description}
      - maxStars: ${this.maxStars}
      - valueStars: ${this.valueStars}
      - className: ${this.className}`);
  }

  // Defaults Fns
}
