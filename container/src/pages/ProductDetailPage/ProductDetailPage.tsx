import React, { lazy } from "react";

import LayoutPage from "@src/layouts/LayaoutPage/LayoutPage";

import "@src/pages/ProductDetailPage/ProductDetailPage.css";

const ProductDetailLazy = lazy(
  () => import("@src/components/apps/AppProductDetail/AppProductDetail")
);

const ProductDetailPage = () => {
  return (
    <LayoutPage>
      <ProductDetailLazy classNameWrapper="product-detail-wrapper"></ProductDetailLazy>
    </LayoutPage>
  );
};

export default ProductDetailPage;
