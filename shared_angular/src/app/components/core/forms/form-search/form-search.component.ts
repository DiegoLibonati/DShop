import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from "@angular/core";

import template from "@src/app/components/core/forms/form-search/form-search.component.html";
import styles from "@src/app/components/core/forms/form-search/form-search.component.css";

import { mountComponent, unMountComponent } from "shared_core/SharedCore";
import { Component as ComponentSharedCore } from "shared_core/SharedCoreEnums";
import { FormSearchProps } from "shared_core/SharedCoreProps";

@Component({
  selector: "app-form-search",
  template: template,
  styles: [styles],
})
export class FormSearchComponent implements AfterViewInit, OnDestroy {
  @ViewChild("formsearch") ref: ElementRef | null = null;

  @Input() idRoot: FormSearchProps["idRoot"] = "";
  @Input() placeholder: FormSearchProps["placeholder"] = "";
  @Input() language: FormSearchProps["language"] = "en";
  @Input() className: FormSearchProps["className"] = "";
  @Input() classNameWrapper: FormSearchProps["classNameWrapper"] = "";
  @Input() formSubmit: FormSearchProps["onSubmit"] =
    this.onDefalutSubmit.bind(this);

  private componentName: string = "app-form-search";

  ngAfterViewInit(): void {
    mountComponent(this.ref!.nativeElement, ComponentSharedCore.FormSearch, {
      idRoot: this.idRoot,
      placeholder: this.placeholder,
      language: this.language,
      className: this.className,
      onSubmit: this.formSubmit,
    });
  }

  ngOnDestroy(): void {
    unMountComponent(this.idRoot);
  }

  viewProps(): void {
    console.log(`Props of ${this.componentName}:
      - ref: ${this.ref}
      - idRoot: ${this.idRoot}
      - placeholder: ${this.placeholder}
      - language: ${this.language}
      - className: ${this.className}
      - classNameWrapper: ${this.classNameWrapper}
      - onSubmit: ${this.formSubmit}
    `);
  }

  // Defaults Fns
  onDefalutSubmit(inputValue: string) {
    console.log(
      "Executed in shared_angular - onDefaultSubmit: ",
      this.componentName,
      inputValue
    );
  }
}
