import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from "@angular/core";

import template from "@src/app/components/core/svgs/svg-close/svg-close.component.html";
import styles from "@src/app/components/core/svgs/svg-close/svg-close.component.css";

import { mountComponent, unMountComponent } from "shared_core/SharedCore";
import { Component as ComponentSharedCore } from "shared_core/SharedCoreEnums";
import { SvgCloseProps } from "shared_core/SharedCoreProps";
import { MountOptions } from "shared_core/SharedCoreEntities";

@Component({
  selector: "svg-close",
  template: template,
  styles: [styles],
})
export class SvgCloseComponent implements AfterViewInit, OnDestroy {
  @ViewChild("svgclose") ref: ElementRef | null = null;

  private componentName: string = "svg-close";

  @Input() idRoot: SvgCloseProps["idRoot"] = "";
  @Input() className: SvgCloseProps["className"] = "";
  @Input() classNameWrapper: SvgCloseProps["classNameWrapper"] = "";

  ngAfterViewInit(): void {
    const options: MountOptions = {
      idComponent: ComponentSharedCore.SvgClose,
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
