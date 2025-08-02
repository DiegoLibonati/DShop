import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from "@angular/core";

import template from "@src/app/components/svgs/svg-search/svg-search.component.html";
import styles from "@src/app/components/svgs/svg-search/svg-search.component.css";

import { mountComponent, unMountComponent } from "shared_utils/SharedUtils";
import { Component as ComponentSharedUtils } from "shared_utils/SharedUtilsEnums";
import { SvgSearchProps } from "shared_utils/SharedUtilsProps";

@Component({
  selector: "svg-search",
  template: template,
  styles: [styles],
})
export class SvgSearchComponent implements AfterViewInit, OnDestroy {
  @ViewChild("svgsearch") ref: ElementRef | null = null;

  private componentName: string = "svg-search";

  @Input() idRoot: SvgSearchProps["idRoot"] = "";
  @Input() className: SvgSearchProps["className"] = "";

  ngAfterViewInit(): void {
    mountComponent(this.ref!.nativeElement, ComponentSharedUtils.SvgSearch, {
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
