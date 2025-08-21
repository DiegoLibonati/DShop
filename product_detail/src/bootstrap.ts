import { createApp, type App as VueApp } from "vue";

import { MountOptions, UnMountOptions } from "@src/entities/entities";

import App from "@src/App.vue";

import { IS_DEV } from "@src/constants/envs";

const titleMfe: string = "Product Detail";
let app: VueApp | null = null;

const mount = (el: HTMLElement, options: MountOptions = {}) => {
  const debug = options?.debug;

  if (!app) app = createApp(App);

  app.mount(el);

  if (IS_DEV === "development" && debug) {
    console.log(`[mountComponent - ${titleMfe}] mounting ${titleMfe}`);
  }
};

const unMount = (options: UnMountOptions) => {
  const debug = options?.debug;

  if (!app) {
    throw new Error(
      `[unMountComponent - ${titleMfe}] No MFE found ${titleMfe}`
    );
  }

  app.unmount();
  app = null;

  if (IS_DEV === "development" && debug) {
    console.log(`[unMountComponent - ${titleMfe}] Unmounting ${titleMfe}`);
  }
};

// Dev
if (IS_DEV === "development") {
  const devRoot = document.getElementById(
    "_product-detail-dev-root"
  ) as HTMLDivElement;

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount, unMount };
