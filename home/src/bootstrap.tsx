import React from "react";
import { createRoot, Root } from "react-dom/client";

import { MountOptions, UnMountOptions } from "@src/entities/entities";

import { App } from "@src/App";

import { ConfigProvider } from "@src/contexts/Config/ConfigContext";
import { BrandsProvider } from "@src/contexts/Brands/BrandsContext";
import { NewArrivalsProvider } from "@src/contexts/NewArrivals/NewArrivalsContext";
import { TopSellingsProvider } from "@src/contexts/TopSellings/TopSellingsContext";
import { DressStylesProvider } from "@src/contexts/DressStyles/DressStylesContext";
import { HappyCustomersProvider } from "@src/contexts/HappyCustomers/HappyCustomersContext";

import { IS_DEV } from "@src/constants/envs";
import { clothesList } from "@src/constants/clothes";
import { reviews } from "@src/constants/reviews";

const titleMfe: string = "Home";
let root: Root | null = null;

const mount = (el: HTMLElement, options: MountOptions) => {
  const callbacks = options.props.callbacks;
  const content = options.props.content;
  const debug = options?.debug;

  if (!root) {
    root = createRoot(el);
  }

  root.render(
    <ConfigProvider>
      <BrandsProvider>
        <NewArrivalsProvider>
          <TopSellingsProvider>
            <DressStylesProvider>
              <HappyCustomersProvider>
                <App callbacks={callbacks} content={content} />
              </HappyCustomersProvider>
            </DressStylesProvider>
          </TopSellingsProvider>
        </NewArrivalsProvider>
      </BrandsProvider>
    </ConfigProvider>
  );

  if (IS_DEV === "development" && debug) {
    console.log(`[mountComponent - ${titleMfe}] mounting ${titleMfe}`);
  }
};

const unMount = (options?: UnMountOptions) => {
  const debug = options?.debug;

  if (!root) {
    throw new Error(
      `[unMountComponent - ${titleMfe}] No MFE found ${titleMfe}`
    );
  }

  root!.unmount();
  root = null;

  if (IS_DEV === "development" && debug) {
    console.log(`[unMountComponent - ${titleMfe}] Unmounting ${titleMfe}`);
  }
};

// Dev
if (IS_DEV === "development") {
  const devRoot = document.getElementById("_home-dev-root") as HTMLDivElement;

  if (devRoot) {
    const options: MountOptions = {
      props: {
        callbacks: {
          navigateToProductDetail: (id: string) => {
            console.log(id);
          },
        },
        content: {
          brands: ["VERSACE", "ZARA", "GUCCI", "PRADA", "Calvin Klein"],
          newArrivals: clothesList,
          topSellings: clothesList,
          reviews: reviews,
        },
      },
    };

    mount(devRoot, options);
  }
}

export { mount, unMount };
