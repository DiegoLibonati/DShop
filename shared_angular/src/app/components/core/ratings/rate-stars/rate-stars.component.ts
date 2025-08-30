import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from "@angular/core";

import template from "@src/app/components/core/ratings/rate-stars/rate-stars.component.html";
import styles from "@src/app/components/core/ratings/rate-stars/rate-stars.component.css";

import { mountComponent, unMountComponent } from "shared_core/SharedCore";
import { Component as ComponentSharedCore } from "shared_core/SharedCoreEnums";
import { RateStarsProps } from "shared_core/SharedCoreProps";
import { MountOptions } from "shared_core/SharedCoreEntities";

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
  @Input() language: RateStarsProps["language"] = "en";
  @Input() className: RateStarsProps["className"] = "";
  @Input() classNameStar: RateStarsProps["classNameStar"] = "";
  @Input() classNameWrapper: RateStarsProps["classNameWrapper"] = "";

  private componentName: string = "app-rate-stars";

  ngAfterViewInit(): void {
    const options: MountOptions = {
      idComponent: ComponentSharedCore.RateStars,
      props: {
        idRoot: this.idRoot,
        max: this.max,
        value: this.value,
        inColor: this.inColor,
        outColor: this.outColor,
        language: this.language,
        className: this.className,
        classNameStar: this.classNameStar,
      },
    };

    mountComponent(this.ref!.nativeElement, options);
  }

  ngOnDestroy(): void {
    unMountComponent(this.idRoot);
  }

  viewProps(): void {
    console.log(`Props of ${this.componentName}:
      - ref: ${this.ref}
      - idRoot: ${this.idRoot}
      - max: ${this.max}
      - value: ${this.value}
      - inColor: ${this.inColor}
      - outColor: ${this.outColor}
      - language: ${this.language}
      - className: ${this.className}
      - classNameStar: ${this.classNameStar}
      - classNameWrapper: ${this.classNameWrapper}
    `);
  }
  // Defaults Fns
}
