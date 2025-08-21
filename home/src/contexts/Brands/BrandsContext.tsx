import React, { useContext, useState } from "react";

import type {
  BrandsContext as BrandsContextT,
  BrandsProviderProps,
} from "@src/entities/contexts";

import { BrandsContext } from "@src/contexts/Brands/BrandsProvider";

export const BrandsProvider = ({ children }: BrandsProviderProps) => {
  const [brands, setBrands] = useState<string[] | null>(null);

  const handleSetBrands = (brands: string[] | null) => {
    setBrands(brands);
  };

  return (
    <BrandsContext.Provider
      value={{
        brands: brands,
        handleSetBrands: handleSetBrands,
      }}
    >
      {children}
    </BrandsContext.Provider>
  );
};

export const useBrandsContext = (): BrandsContextT => {
  return useContext(BrandsContext)!;
};
