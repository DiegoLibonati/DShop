import React, { useContext, useState } from "react";

import type {
  HappyCustomersContext as HappyCustomersContextT,
  HappyCustomersProviderProps,
} from "@src/entities/contexts";

import { HappyCustomersContext } from "@src/contexts/HappyCustomers/HappyCustomersProvider";

import { Review } from "shared_core/SharedCoreEntities";

export const HappyCustomersProvider = ({
  children,
}: HappyCustomersProviderProps) => {
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
