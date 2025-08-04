import { Component } from "@angular/core";

import {
  ButtonWhiteProps,
  HeaderProps,
  ReviewCustomerProps,
} from "@src/app/entities/props";

import template from "@src/app/components/app-test/app-test.component.html";
import styles from "@src/app/components/app-test/app-test.component.css";

import { HEADER_OPTIONS } from "@src/app/constants/components.constants";

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
    options: HEADER_OPTIONS,
    onClickMenu: this.onHeaderDefaultClickMenu.bind(this),
    onSubmitSearch: this.onHeaderDefaultSubmitSearch.bind(this),
    onClickSearch: this.onHeaderDefaultClickSearch.bind(this),
    onClickCart: this.onHeaderDefaultClickCart.bind(this),
  };
  public buttonWhiteProps: ButtonWhiteProps = {
    ariaLabel: "view all",
    className: "button-white-test",
    rounded: true,
    borderGray: true,
    textContent: "pepe",
    onClick: this.onButtonWhiteDefaultClick.bind(this),
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

  // BUTTON WHITE COMPONENT
  onButtonWhiteDefaultClick(e: MouseEvent): void {
    console.log("Executed in shared_angular - Click: ", this.componentName, e);
  }
}
