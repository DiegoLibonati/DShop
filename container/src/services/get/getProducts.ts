import { ProductAPI } from "@src/entities/services";

import { api } from "@src/services/apiInstance";

export const getProducts = async (): Promise<ProductAPI[]> => {
  try {
    const data = await api.get("/products");
    const apiProducts = data.data;

    return apiProducts;
  } catch (e) {
    console.error(e);
    return [];
  }
};
