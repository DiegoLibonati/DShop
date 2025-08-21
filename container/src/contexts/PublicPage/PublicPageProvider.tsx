import { createContext } from "react";

import { PublicPageContext as PublicPageContextT } from "@src/entities/contexts";

export const PublicPageContext = createContext<PublicPageContextT | null>(null);
