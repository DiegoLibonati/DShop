import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from "@angular/core";

import template from "@src/app/components/ratings/rate-stars/rate-stars.component.html";
import styles from "@src/app/components/ratings/rate-stars/rate-stars.component.css";

import { mountComponent, unMountComponent } from "shared_react/SharedReact";
import { Component as ComponentSharedReact } from "shared_react/SharedReactEnums";
import { RateStarsProps } from "shared_react/SharedReactProps";

@Component({
  selector: "app-rate-stars",
  template: template,
  styles: [styles],
})
export class RateStarsComponent implements AfterViewInit, OnDestroy {
  @ViewChild("ratestars") ref: ElementRef | null = null;

  @Input() idRoot: RateStarsProps["idRoot"] = "";
  @Input() max: RateStarsProps["max"] = 5;
  @Input() value: RateStarsProps["value"] = 0;
  @Input() inColor: RateStarsProps["inColor"] = "#FFC633";
  @Input() outColor: RateStarsProps["outColor"] = "#FFFFFF";
  @Input() className: RateStarsProps["className"] = "";

  private componentName: string = "app-rate-stars";

  get classNameWrapper(): string {
    return this.className ? `${this.className}-wrapper` : "";
  }

  ngAfterViewInit(): void {
    mountComponent(this.ref!.nativeElement, ComponentSharedReact.RateStars, {
      idRoot: this.idRoot,
      max: this.max,
      value: this.value,
      inColor: this.inColor,
      outColor: this.outColor,
      className: this.className,
    });
  }

  ngOnDestroy(): void {
    unMountComponent(this.idRoot);
  }

  viewProps(): void {
    console.log(`Props of ${this.componentName}:
      - ref: ${this.ref}
      - idRoot: ${this.idRoot}
      - className: ${this.className}
    `);
  }
  // Defaults Fns
}
