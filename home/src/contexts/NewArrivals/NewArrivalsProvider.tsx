import { createContext } from "react";

import { NewArrivalsContext as NewArrivalsContextT } from "@src/entities/contexts";

export const NewArrivalsContext = createContext<NewArrivalsContextT | null>(
  null
);
