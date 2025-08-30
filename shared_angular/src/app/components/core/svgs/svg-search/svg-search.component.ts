import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from "@angular/core";

import template from "@src/app/components/core/svgs/svg-search/svg-search.component.html";
import styles from "@src/app/components/core/svgs/svg-search/svg-search.component.css";

import { mountComponent, unMountComponent } from "shared_core/SharedCore";
import { Component as ComponentSharedCore } from "shared_core/SharedCoreEnums";
import { SvgSearchProps } from "shared_core/SharedCoreProps";
import { MountOptions } from "shared_core/SharedCoreEntities";

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
  @Input() classNameWrapper: SvgSearchProps["classNameWrapper"] = "";

  ngAfterViewInit(): void {
    const options: MountOptions = {
      idComponent: ComponentSharedCore.SvgHamburgerMenu,
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
