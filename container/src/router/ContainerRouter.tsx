import { Route, Routes } from "react-router";

import type { JSX } from "react";

import HomeApp from "@container/components/HomeApp/HomeApp";
import NotFound from "@container/components/NotFound/NotFound";
import ProductDetailApp from "@container/components/ProductDetailApp/ProductDetailApp";

import { PublicRoute } from "@container/router/PublicRoute";

import { useMfeCallbacks } from "@container/hooks/useMfeCallbacks";

export const ContainerRouter = (): JSX.Element => {
  const callbacks = useMfeCallbacks();

  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<HomeApp callbacks={callbacks} />} />
        <Route
          path="/product/:id"
          element={<ProductDetailApp callbacks={callbacks}></ProductDetailApp>}
        ></Route>

        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Route>
    </Routes>
  );
};
