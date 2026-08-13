import { Fragment, useEffect, useState, useCallback, useMemo } from "react";
import { useParams } from "react-router";

import type { JSX } from "react";
import type { Clothes, Product } from "shared-core/sdk";
import type { ProductDetailAppProps } from "@container/types/props";
import type { SeoProps } from "@container/types/props";

import RemoteMfe from "@container/components/RemoteMfe/RemoteMfe";
import Seo from "@container/components/Seo/Seo";

import { useLoadable } from "@container/hooks/useLoadable";

import productService from "@container/services/productService";

import { buildProductSeo } from "@container/helpers/buildProductSeo";
import { getParseClothes } from "@container/helpers/getParseClothes";
import { getParseProduct } from "@container/helpers/getParseProduct";

import "@container/components/ProductDetailApp/ProductDetailApp.css";

const ProductDetailApp = ({ callbacks }: ProductDetailAppProps): JSX.Element => {
  const { id } = useParams();

  const [clothes, setClothes] = useState<Clothes[] | null>(null);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const loadModule = useCallback(() => import("product-detail/ProductDetailApp"), []);
  const loadData = useCallback(
    async (isActive: () => boolean): Promise<void> => {
      try {
        const [products, productApi] = await Promise.all([
          productService.getAll(),
          productService.getById(Number(id)),
        ]);

        if (isActive()) {
          setClothes(getParseClothes(products));
          setProduct(getParseProduct(productApi));
        }
      } catch {
        if (isActive()) setError(true);
      } finally {
        if (isActive()) setLoading(false);
      }
    },
    [id]
  );
  const mountData = useMemo(
    () => ({ product, clothesAlsoLike: clothes ?? [] }),
    [product, clothes]
  );
  const seoTags = useMemo<SeoProps>(
    () => buildProductSeo(id, product, !loading && (error || !product)),
    [id, product, loading, error]
  );

  useLoadable(loading);

  useEffect(() => {
    let ignore = false;

    setLoading(true);
    setError(false);

    void loadData(() => !ignore);

    return (): void => {
      ignore = true;
    };
  }, [loadData]);

  return (
    <Fragment>
      <Seo {...seoTags} />
      {error || !product || !clothes ? (
        <div className="product-detail-app-error" role="alert">
          <h2 className="product-detail-app-error__title">Error loading product</h2>
          <p className="product-detail-app-error__message">Please try again later.</p>
        </div>
      ) : (
        <RemoteMfe
          loadModule={loadModule}
          callbacks={callbacks}
          mountData={mountData}
          wrapperClass="product-detail-wrapper"
        />
      )}
    </Fragment>
  );
};

export default ProductDetailApp;
