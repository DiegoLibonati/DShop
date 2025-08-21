import { createContext } from "react";

import { DressStylesContext as DressStylesContextT } from "@src/entities/contexts";

export const DressStylesContext = createContext<DressStylesContextT | null>(
  null
);
