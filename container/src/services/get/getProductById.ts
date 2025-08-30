import { ProductAPI } from "@src/entities/services";

import { api } from "@src/services/apiInstance";

export const getProductById = async (
  id: string
): Promise<ProductAPI | null> => {
  try {
    const data = await api.get(`/products/${id}`);
    const apiProduct = data.data;

    return apiProduct;
  } catch (e) {
    console.error(e);
    return null;
  }
};
