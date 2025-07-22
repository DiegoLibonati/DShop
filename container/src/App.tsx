import React, { lazy, Suspense } from "react";

import { HEADER_OPTIONS } from "@src/constants/components";

const HeaderLazy = lazy(() => import("@src/components/headers/Header/Header"));
const HomeLazy = lazy(() => import("@src/components/apps/AppHome/AppHome"));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Cargando Header</div>}>
        <HeaderLazy
          name="DShop"
          options={HEADER_OPTIONS}
          onClickCart={(e) => {
            console.log("Click Cart ", e);
          }}
          onClickMenu={(e) => {
            console.log("Click Menu ", e);
          }}
          onClickSearch={(e) => {
            console.log("Click Search ", e);
          }}
          onSubmitSearch={(e, value) => {
            e.preventDefault();
            console.log("SubmitSearch ", e, value);
          }}
        ></HeaderLazy>
      </Suspense>
      <Suspense fallback={<div>Cargando Home</div>}>
        <HomeLazy></HomeLazy>
      </Suspense>
    </div>
  );
};
