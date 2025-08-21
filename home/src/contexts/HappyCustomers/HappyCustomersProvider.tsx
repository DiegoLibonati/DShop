import { createContext } from "react";

import { HappyCustomersContext as HappyCustomersContextT } from "@src/entities/contexts";

export const HappyCustomersContext =
  createContext<HappyCustomersContextT | null>(null);
