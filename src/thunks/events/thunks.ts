import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from 'api/products';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const { data } = await getProducts();
  return data;
});
