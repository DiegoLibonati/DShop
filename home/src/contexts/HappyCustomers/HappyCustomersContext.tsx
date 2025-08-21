import React, { useContext, useState } from "react";

import type {
  HappyCustomersContext as HappyCustomersContextT,
  HappyCustomersProviderProps,
} from "@src/entities/contexts";
import { Review } from "@src/entities/entities";

import { HappyCustomersContext } from "@src/contexts/HappyCustomers/HappyCustomersProvider";

export const HappyCustomersProvider = ({ children }: HappyCustomersProviderProps) => {
  const [reviews, setReviews] = useState<Review[] | null>(null);

  const handleSetReviews = (reviews: Review[] | null) => {
    setReviews(reviews);
  };

  return (
    <HappyCustomersContext.Provider
      value={{
        reviews: reviews,
        handleSetReviews: handleSetReviews,
      }}
    >
      {children}
    </HappyCustomersContext.Provider>
  );
};

export const useHappyCustomersContext = (): HappyCustomersContextT => {
  return useContext(HappyCustomersContext)!;
};
