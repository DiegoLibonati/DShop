import React from "react";
import { Route, Routes } from "react-router-dom";

import { PublicPageProvider } from "@src/contexts/PublicPage/PublicPageContext";

import PublicRoutes from "@src/routes/PublicRoutes/PublicRoutes";

export const MemoryRouter = () => {
  return (
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
  );
};
