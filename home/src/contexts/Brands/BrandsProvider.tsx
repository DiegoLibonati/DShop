import { createContext } from "react";

import { BrandsContext as BrandsContextT } from "@src/entities/contexts";

export const BrandsContext = createContext<BrandsContextT | null>(null);
