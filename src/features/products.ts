import { createSlice } from '@reduxjs/toolkit';
import { ProductsStatus } from 'models/Product';
import { fetchProducts } from 'thunks/events/thunks';

const initialState = {
  productsList: [],
  fetchProductsStatus: '',
};

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
