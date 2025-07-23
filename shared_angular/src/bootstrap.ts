import "zone.js";

import { ApplicationRef, ComponentRef, NgModuleRef } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { Component } from "@src/app/entities/enum";

import { AppModule } from "@src/app/app.module";

import { HeaderComponent } from "@src/app/components/headers/header/header.component";
import { AppTestComponent } from "@src/app/components/app-test/app-test.component";
import { ButtonWhiteComponent } from "@src/app/components/buttons/button-white/button-white.component";

import { IS_DEV } from "@src/app/constants/envs.constants";

// TODO: Cambiar los Any.

const componentsMap: Record<string, ComponentRef<any>> = {};

let ngModuleRef: NgModuleRef<any> | null = null;
let appRef: ApplicationRef | null = null;

const getComponentById = (idComponent: Component): any => {
  return {
    [Component.Header]: HeaderComponent,
    [Component.AppTest]: AppTestComponent,
    [Component.ButtonWhite]: ButtonWhiteComponent,
  }[idComponent];
};

export const mountComponent = async (
  el: HTMLElement,
  id: Component,
  props: Record<string, unknown> = {}
) => {
  const idRoot = props.idRoot as string;

  if (!idRoot) {
    throw new Error("You must provide an 'idRoot' to identify the component.");
  }

  if (!ngModuleRef) {
    ngModuleRef = await platformBrowserDynamic().bootstrapModule(AppModule);
    appRef = ngModuleRef.injector.get(ApplicationRef);
  }

  if (componentsMap[idRoot]) {
    const compRef = componentsMap[idRoot];
    Object.assign(compRef.instance, props);
    (compRef.changeDetectorRef as any).detectChanges();
    return;
  }

  const componentType = getComponentById(id);
  const factory =
    ngModuleRef.componentFactoryResolver.resolveComponentFactory(componentType);
  const compRef: ComponentRef<any> = factory.create(ngModuleRef.injector);

  Object.assign(compRef.instance, props);
  appRef!.attachView(compRef.hostView);
  (compRef.changeDetectorRef as any).detectChanges();

  const domElem = (compRef.hostView as any).rootNodes[0] as HTMLElement;
  el.innerHTML = "";
  el.appendChild(domElem);

  componentsMap[idRoot] = compRef;
};

// Dev
if (IS_DEV === "development") {
  const devRoot = document.getElementById(
    "_shared-angular-dev-root"
  ) as HTMLDivElement;

  if (devRoot) {
    mountComponent(devRoot, Component.AppTest, { idRoot: "APP TEST" });
  }
}
