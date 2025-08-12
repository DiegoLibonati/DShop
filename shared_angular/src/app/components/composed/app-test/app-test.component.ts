import { Component } from "@angular/core";

import { HeaderProps, ReviewCustomerProps } from "@src/app/entities/props";

import template from "@src/app/components/composed/app-test/app-test.component.html";
import styles from "@src/app/components/composed/app-test/app-test.component.css";

@Component({
  selector: "app-test",
  template: template,
  styles: [styles],
})
export class AppTestComponent {
  private componentName: string = "app-test";

  public headerProps: HeaderProps = {
    name: "DShop",
    className: "header-test",
    onClickMenu: this.onHeaderDefaultClickMenu.bind(this),
    onSubmitSearch: this.onHeaderDefaultSubmitSearch.bind(this),
    onClickSearch: this.onHeaderDefaultClickSearch.bind(this),
    onClickCart: this.onHeaderDefaultClickCart.bind(this),
  };

  public reviewCustomerProps: ReviewCustomerProps = {
    name: "Sarah M.",
    description:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    maxStars: 5,
    valueStars: 5,
    className: "review-customer-test",
  };

  // HEADER COMPONENT

  onHeaderDefaultClickMenu(e: MouseEvent): void {
    console.log(
      "Executed in shared_angular - ClickMenu: ",
      this.componentName,
      e
    );
  }

  onHeaderDefaultSubmitSearch(e: Event, inputValue: string): void {
    e.preventDefault();

    console.log(
      "Executed in shared_angular - SubmitSearch: ",
      this.componentName,
      e
    );
    console.log("Value: ", inputValue);
  }

  onHeaderDefaultClickSearch(e: MouseEvent): void {
    console.log(
      "Executed in shared_angular - ClickSearch: ",
      this.componentName,
      e
    );
  }

  onHeaderDefaultClickCart(e: MouseEvent): void {
    console.log(
      "Executed in shared_angular - ClickCart: ",
      this.componentName,
      e
    );
  }
}
