import React, { useContext, useState } from "react";

import type {
  TopSellingsContext as TopSellingsContextT,
  TopSellingsProviderProps,
} from "@src/entities/contexts";
import { Clothes } from "@src/entities/entities";

import { TopSellingsContext } from "@src/contexts/TopSellings/TopSellingsProvider";

export const TopSellingsProvider = ({ children }: TopSellingsProviderProps) => {
  const [topSellings, setTopSellings] = useState<Clothes[] | null>(null);

  const handleSetTopSellings = (topSellings: Clothes[] | null) => {
    setTopSellings(topSellings);
  };

  return (
    <TopSellingsContext.Provider
      value={{
        topSellings: topSellings,
        handleSetTopSellings: handleSetTopSellings,
      }}
    >
      {children}
    </TopSellingsContext.Provider>
  );
};

export const useTopSellingsContext = (): TopSellingsContextT => {
  return useContext(TopSellingsContext)!;
};
