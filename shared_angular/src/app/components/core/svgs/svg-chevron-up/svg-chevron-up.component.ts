import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from "@angular/core";

import template from "@src/app/components/core/svgs/svg-chevron-up/svg-chevron-up.component.html";
import styles from "@src/app/components/core/svgs/svg-chevron-up/svg-chevron-up.component.css";

import { mountComponent, unMountComponent } from "shared_core/SharedCore";
import { Component as ComponentSharedCore } from "shared_core/SharedCoreEnums";
import { SvgChevronUpProps } from "shared_core/SharedCoreProps";
import { MountOptions } from "shared_core/SharedCoreEntities";

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
  @Input() classNameWrapper: SvgChevronUpProps["classNameWrapper"] = "";

  ngAfterViewInit(): void {
    const options: MountOptions = {
      idComponent: ComponentSharedCore.SvgChevronUp,
      props: {
        idRoot: this.idRoot,
        className: this.className,
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
      - className: ${this.className}
      - classNameWrapper: ${this.classNameWrapper}
    `);
  }

  // Defaults Fns
}
