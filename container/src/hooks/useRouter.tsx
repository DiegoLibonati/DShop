import React from "react";
import { useNavigate } from "react-router-dom";

import { UseRouter } from "@src/entities/hooks";

export const useRouter = (): UseRouter => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  return {
    navigateToHome: navigateToHome,
  };
};
