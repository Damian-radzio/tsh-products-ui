import { BASE_URL } from './base_url';
import client from './client';

export const getProducts = async (): Promise<any> => {
  return await client(`${BASE_URL}/products`, {
    method: 'GET',
  });
};
