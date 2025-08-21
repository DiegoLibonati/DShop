import React, { useContext, useState } from "react";

import type {
  NewArrivalsContext as NewArrivalsContextT,
  NewArrivalsProviderProps,
} from "@src/entities/contexts";
import { Clothes } from "@src/entities/entities";

import { NewArrivalsContext } from "@src/contexts/NewArrivals/NewArrivalsProvider";

export const NewArrivalsProvider = ({ children }: NewArrivalsProviderProps) => {
  const [newArrivals, setNewArrivals] = useState<Clothes[] | null>(null);

  const handleSetNewArrivals = (newArrivals: Clothes[] | null) => {
    setNewArrivals(newArrivals);
  };

  return (
    <NewArrivalsContext.Provider
      value={{
        newArrivals: newArrivals,
        handleSetNewArrivals: handleSetNewArrivals,
      }}
    >
      {children}
    </NewArrivalsContext.Provider>
  );
};

export const useNewArrivalsContext = (): NewArrivalsContextT => {
  return useContext(NewArrivalsContext)!;
};
