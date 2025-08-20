import { Component, Input, OnInit } from "@angular/core";

import { NotificationBarProps } from "@src/app/entities/props";

import template from "@src/app/components/composed/notifications/notification-bar/notification-bar.component.html";
import styles from "@src/app/components/composed/notifications/notification-bar/notification-bar.component.css";

import { getIdsByLength } from "shared_core/SharedCore";

@Component({
  selector: "app-notification-bar",
  template: template,
  styles: [styles],
})
export class NotificationBarComponent implements OnInit {
  @Input() language: NotificationBarProps["language"] = "en";
  @Input() className: NotificationBarProps["className"] = "";
  @Input() onClose: NotificationBarProps["onClose"] =
    this.onDefaultClose.bind(this);

  private componentName: string = "app-notification-bar";

  public rootIds = getIdsByLength(1);

  ngOnInit(): void {}

  viewProps(): void {
    console.log(`Props of ${this.componentName}:
      - language: ${this.language}
      - className: ${this.className}`);
  }

  // Defaults Fns
  onDefaultClose() {
    console.log(
      "Executed in shared_angular - onDefaultClose: ",
      this.componentName
    );
  }
}
