import { Component, Input, OnInit } from "@angular/core";

import template from "@src/app/components/header/header.component.html"
import styles from "@src/app/components/header/header.component.css"

@Component({
  selector: "app-header",
  template: template,
  styles: [styles],
})
export class HeaderComponent implements OnInit {
  @Input() prop1: string = "";

  ngOnInit(): void {
    console.log("Props - Header:");
  }
}
