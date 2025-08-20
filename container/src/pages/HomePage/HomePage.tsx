import React, { lazy } from "react";

import LayoutPage from "@src/layouts/LayaoutPage/LayoutPage";

import "@src/pages/HomePage/HomePage.css";

const HomeLazy = lazy(() => import("@src/components/apps/AppHome/AppHome"));

const HomePage = () => {
  return (
    <LayoutPage>
      <HomeLazy classNameWrapper="home-wrapper"></HomeLazy>
    </LayoutPage>
  );
};

export default HomePage;
