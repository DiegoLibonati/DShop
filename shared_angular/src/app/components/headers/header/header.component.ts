import { Component, Input, OnInit } from "@angular/core";

import { HeaderProps } from "@src/app/entities/props";

import template from "@src/app/components/headers/header/header.component.html";
import styles from "@src/app/components/headers/header/header.component.css";

// TODO: Pasar iconos por props.

@Component({
  selector: "app-header",
  template: template,
  styles: [styles],
  imports: [],
})
export class HeaderComponent implements OnInit {
  @Input() name: HeaderProps["name"] = "";
  @Input() options: HeaderProps["options"] = [];
  @Input() className: HeaderProps["className"] = "";

  @Input() onClickMenu: HeaderProps["onClickMenu"] =
    this.onDefaultClickMenu.bind(this);
  @Input() onSubmitSearch: HeaderProps["onSubmitSearch"] =
    this.onDefaultSubmitSearch.bind(this);
  @Input() onClickSearch: HeaderProps["onClickSearch"] =
    this.onDefaultClickSearch.bind(this);
  @Input() onClickCart: HeaderProps["onClickCart"] =
    this.onDefaultClickCart.bind(this);

  private componentName: string = "header";

  public searchInputValue: string = "";

  ngOnInit(): void {
    // this.viewProps();
  }

  viewProps(): void {
    console.log(`Props of ${this.componentName}:
      - name: ${this.name} 
      - options: ${this.options}
      - onClickMenu: ${this.onClickMenu}
      - onSubmitSearch: ${this.onSubmitSearch}
      - onClickSearch: ${this.onClickSearch}
      - onClickCart: ${this.onClickCart}
      - className: ${this.className}`);
  }

  onSearchInputChange(e: InputEvent) {
    const target = e.target as HTMLInputElement;
    this.searchInputValue = target.value;
  }

  // Defaults Fns

  onDefaultClickMenu(e: MouseEvent): void {
    console.log(
      "Executed in shared_angular - ClickMenu: ",
      this.componentName,
      e
    );
  }

  onDefaultSubmitSearch(e: Event, searchInputValue: string): void {
    e.preventDefault();

    console.log(
      "Executed in shared_angular - SubmitSearch: ",
      this.componentName,
      e
    );
    console.log("Value: ", searchInputValue);
  }

  onDefaultClickSearch(e: MouseEvent): void {
    console.log(
      "Executed in shared_angular - ClickSearch: ",
      this.componentName,
      e
    );
  }

  onDefaultClickCart(e: MouseEvent): void {
    console.log(
      "Executed in shared_angular - ClickCart: ",
      this.componentName,
      e
    );
  }
}
