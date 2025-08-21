import { createContext } from "react";

import { TopSellingsContext as TopSellingsContextT } from "@src/entities/contexts";

export const TopSellingsContext = createContext<TopSellingsContextT | null>(
  null
);
