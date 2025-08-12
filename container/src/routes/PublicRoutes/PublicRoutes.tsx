import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "@src/pages/HomePage/HomePage";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>

      <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
    </Routes>
  );
};

export default PublicRoutes;
