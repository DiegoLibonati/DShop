import React from "react";
import { HashRouter as HashRouterDom, Route, Routes } from "react-router-dom";

import { PublicPageProvider } from "@src/contexts/PublicPage/PublicPageContext";

import PublicRoutes from "@src/routes/PublicRoutes/PublicRoutes";

export const HashRouter = () => {
  return (
    <HashRouterDom>
      <Routes>
        <Route
          path="/*"
          element={
            <PublicPageProvider>
              <PublicRoutes></PublicRoutes>
            </PublicPageProvider>
          }
        ></Route>
      </Routes>
    </HashRouterDom>
  );
};
