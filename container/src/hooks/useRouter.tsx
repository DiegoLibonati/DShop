import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { UseRouter } from "@src/entities/hooks";

export const useRouter = (): UseRouter => {
  const navigate = useNavigate();
  const params = useParams()

  const navigateToHome = () => {
    navigate("/");
  };

  const navigateToProductDetail = (id: string) => {
    navigate(`/product/${id}`);
  };

  return {
    params: params,
    navigateToHome: navigateToHome,
    navigateToProductDetail: navigateToProductDetail,
  };
};
