import { Component, Input, OnInit } from "@angular/core";

import { HeaderProps } from "@src/app/entities/props";
import { LangHeader } from "@src/app/entities/constants";

import template from "@src/app/components/composed/headers/header/header.component.html";
import styles from "@src/app/components/composed/headers/header/header.component.css";

import { lang } from "@src/app/constants/lang.constants";

import { getIdsByLength } from "shared_core/SharedCore";

@Component({
  selector: "app-header",
  template: template,
  styles: [styles],
})
export class HeaderComponent implements OnInit {
  @Input() name: HeaderProps["name"] = "";
  @Input() isFixed: HeaderProps["isFixed"] = false;
  @Input() language: HeaderProps["language"] = "en";
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

  public texts: LangHeader = lang[this.language!].header;

  public rootIds = getIdsByLength(4);

  ngOnInit(): void {
    // this.viewProps();
  }

  viewProps(): void {
    console.log(`Props of ${this.componentName}:
      - name: ${this.name} 
      - language: ${this.language}
      - isFixed: ${this.isFixed}
      - onClickMenu: ${this.onClickMenu}
      - onSubmitSearch: ${this.onSubmitSearch}
      - onClickSearch: ${this.onClickSearch}
      - onClickCart: ${this.onClickCart}
      - className: ${this.className}`);
  }

  // Defaults Fns

  onDefaultClickMenu(e: MouseEvent): void {
    console.log(
      "Executed in shared_angular - ClickMenu: ",
      this.componentName,
      e
    );
  }

  onDefaultSubmitSearch(inputValue: string): void {
    console.log(
      "Executed in shared_angular - SubmitSearch: ",
      this.componentName,
      inputValue
    );
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
