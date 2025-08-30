import { Params } from "react-router-dom";

export type UseRouter = {
  params: Readonly<Params<string>>;
  navigateToHome: () => void;
  navigateToProductDetail: (id: string) => void;
};
