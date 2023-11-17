import { ProductsParams } from 'models/Product';
import { BASE_URL } from './base_url';
import client from './client';

export const DEFAULT_PARAMS: ProductsParams = {
  search: '',
  limit: 8,
  page: 1,
  promo: null,
  active: null,
};

export const getProducts = async (data: ProductsParams = DEFAULT_PARAMS) => {
  const params = {
    search: data.search || DEFAULT_PARAMS.search,
    limit: data.limit || DEFAULT_PARAMS.limit,
    page: data.page || DEFAULT_PARAMS.page,
    promo: data.promo || DEFAULT_PARAMS.promo,
    active: data.active || DEFAULT_PARAMS.active,
  };

  return await client(`${BASE_URL}/products`, {
    method: 'GET',
    params: { ...params },
  });
};

export const getProductById = async (id: string) => {
  return await client(`${BASE_URL}/products/${id}`, {
    method: 'GET',
  });
};
