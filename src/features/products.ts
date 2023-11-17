import { createSlice } from '@reduxjs/toolkit';
import { ProductsStatus } from 'models/Product';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Params, getProducts } from 'api/products';

const initialState = {
  productsList: [],
  fetchProductsStatus: '',
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (params: Params) => {
  const { data } = await getProducts(params);
  return data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.fetchProductsStatus = ProductsStatus.pending;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.fetchProductsStatus = ProductsStatus.succeeded;
        state.productsList = action.payload;
      })
      .addCase(fetchProducts.rejected, state => {
        state.fetchProductsStatus = ProductsStatus.failed;
      });
  },
});

export const results = (state: any): void => state.products;
export default productsSlice.reducer;
