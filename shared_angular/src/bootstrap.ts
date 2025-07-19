import { ApplicationRef, ComponentRef, NgModuleRef } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { Component } from "@src/app/entities/enum";

import { AppModule } from "@src/app/app.module";

import { HeaderComponent } from "@src/app/components/header/header.component";
import { AppTestComponent } from "@src/app/components/app-test/app-test.component";

// TODO: Cambiar los Any.

let ngModuleRef: NgModuleRef<any> | null = null;
let appRef: ApplicationRef | null = null;

const getComponentById = (idComponent: Component): any => {
  return {
    [Component.Header]: HeaderComponent,
    [Component.AppTest]: AppTestComponent,
  }[idComponent];
};

export const mountComponent = async (
  el: HTMLElement,
  id: Component,
  props: Record<string, any> = {}
) => {
  if (!ngModuleRef) {
    ngModuleRef = await platformBrowserDynamic().bootstrapModule(AppModule);
    appRef = ngModuleRef.injector.get(ApplicationRef);
  }

  const componentType = getComponentById(id);
  const factory =
    ngModuleRef.componentFactoryResolver.resolveComponentFactory(componentType);
  const compRef: ComponentRef<any> = factory.create(ngModuleRef.injector);

  Object.assign(compRef.instance, props);

  appRef!.attachView(compRef.hostView);

  const domElem = (compRef.hostView as any).rootNodes[0] as HTMLElement;
  el.innerHTML = "";
  el.appendChild(domElem);
};

// Dev
if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById(
    "_shared-angular-dev-root"
  ) as HTMLDivElement;

  if (devRoot) {
    mountComponent(devRoot, Component.AppTest);
  }
}
