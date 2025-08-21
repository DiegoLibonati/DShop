import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "@src/pages/HomePage/HomePage";
import ProductDetailPage from "@src/pages/ProductDetailPage/ProductDetailPage";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route
        path="/product/:id"
        element={<ProductDetailPage></ProductDetailPage>}
      ></Route>

      <Route
        path="/*"
        element={<Navigate to="/" replace={true}></Navigate>}
      ></Route>
    </Routes>
  );
};

export default PublicRoutes;
