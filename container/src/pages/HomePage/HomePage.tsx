import React, { lazy, Suspense } from "react";

import LayoutPage from "@src/layouts/LayaoutPage/LayoutPage";

import "@src/pages/HomePage/HomePage.css"

const HomeLazy = lazy(() => import("@src/components/apps/AppHome/AppHome"));

const HomePage = () => {
  return (
    <LayoutPage>
      <Suspense fallback={<div>Cargando Home</div>}>
        <HomeLazy classNameWrapper="home-wrapper"></HomeLazy>
      </Suspense>
    </LayoutPage>
  );
};

export default HomePage;
