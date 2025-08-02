import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from "@angular/core";

import template from "@src/app/components/svgs/svg-chevron-up/svg-chevron-up.component.html";
import styles from "@src/app/components/svgs/svg-chevron-up/svg-chevron-up.component.css";

import { mountComponent, unMountComponent } from "shared_utils/SharedUtils";
import { Component as ComponentSharedUtils } from "shared_utils/SharedUtilsEnums";
import { SvgChevronUpProps } from "shared_utils/SharedUtilsProps";

@Component({
  selector: "svg-chevron-up",
  template: template,
  styles: [styles],
})
export class SvgChevronUpComponent implements AfterViewInit, OnDestroy {
  @ViewChild("svgchevronup") ref: ElementRef | null = null;

  private componentName: string = "svg-chevron-up";

  @Input() idRoot: SvgChevronUpProps["idRoot"] = "";
  @Input() className: SvgChevronUpProps["className"] = "";

  ngAfterViewInit(): void {
    mountComponent(this.ref!.nativeElement, ComponentSharedUtils.SvgChevronUp, {
      idRoot: this.idRoot,
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
