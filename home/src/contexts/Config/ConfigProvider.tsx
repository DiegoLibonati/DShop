import { createContext } from "react";

import { ConfigContext as ConfigContextT } from "@src/entities/contexts";

export const ConfigContext = createContext<ConfigContextT | null>(null);
