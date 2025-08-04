import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from "@angular/core";

import template from "@src/app/components/svgs/svg-chevron-down/svg-chevron-down.component.html";
import styles from "@src/app/components/svgs/svg-chevron-down/svg-chevron-down.component.css";

import { mountComponent, unMountComponent } from "shared_utils/SharedUtils";
import { Component as ComponentSharedUtils } from "shared_utils/SharedUtilsEnums";
import { SvgChevronDownProps } from "shared_utils/SharedUtilsProps";

@Component({
  selector: "svg-chevron-down",
  template: template,
  styles: [styles],
})
export class SvgChevronDownComponent implements AfterViewInit, OnDestroy {
  @ViewChild("svgchevrondown") ref: ElementRef | null = null;

  private componentName: string = "svg-chevron-down";

  @Input() idRoot: SvgChevronDownProps["idRoot"] = "";
  @Input() className: SvgChevronDownProps["className"] = "";
  @Input() classNameWrapper: SvgChevronDownProps["classNameWrapper"] = "";

  ngAfterViewInit(): void {
    mountComponent(
      this.ref!.nativeElement,
      ComponentSharedUtils.SvgChevronDown,
      {
        idRoot: this.idRoot,
        className: this.className,
      }
    );
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
