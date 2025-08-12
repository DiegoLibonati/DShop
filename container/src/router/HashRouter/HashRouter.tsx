import React from "react";
import { Route, Routes } from "react-router-dom";

import PublicRoutes from "@src/routes/PublicRoutes/PublicRoutes";

export const HashRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<PublicRoutes></PublicRoutes>}></Route>
    </Routes>
  );
};
