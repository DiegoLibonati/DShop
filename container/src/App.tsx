import React, { lazy, Suspense, useRef } from "react";

import { HEADER_OPTIONS } from "@src/constants/components";

import { getIdsByLength } from "shared_core/SharedCore";

const HeaderLazy = lazy(() => import("@src/components/core/headers/Header/Header"));
const HomeLazy = lazy(() => import("@src/components/apps/AppHome/AppHome"));

export const App = () => {
  const idHeader = useRef<string[]>(getIdsByLength(1));

  return (
    <div>
      <Suspense fallback={<div>Cargando Header</div>}>
        <HeaderLazy
          idRoot={idHeader.current[0]}
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
