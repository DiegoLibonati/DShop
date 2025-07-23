import { Component } from "@angular/core";

import { ButtonWhiteProps, HeaderProps } from "@src/app/entities/props";

import template from "@src/app/components/app-test/app-test.component.html";
import styles from "@src/app/components/app-test/app-test.component.css";

import { HEADER_OPTIONS } from "@src/app/constants/components.constants";

@Component({
  selector: "app-test",
  template: template,
  styles: [styles],
})
export class AppTestComponent {
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

  private componentName: string = "app-test";

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
