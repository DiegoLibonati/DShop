import React, { useContext, useState } from "react";

import type {
  DressStylesContext as DressStylesContextT,
  DressStylesProviderProps,
} from "@src/entities/contexts";

import { DressStylesContext } from "@src/contexts/DressStyles/DressStylesProvider";

export const DressStylesProvider = ({ children }: DressStylesProviderProps) => {
  const [dressStyles, setDressStyles] = useState<string[] | null>(null);

  const handleSetDressStyles = (dressStyles: string[] | null) => {
    setDressStyles(dressStyles);
  };

  return (
    <DressStylesContext.Provider
      value={{
        dressStyles: dressStyles,
        handleSetDressStyles: handleSetDressStyles,
      }}
    >
      {children}
    </DressStylesContext.Provider>
  );
};

export const useDressStylesContext = (): DressStylesContextT => {
  return useContext(DressStylesContext)!;
};
