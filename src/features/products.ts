import { createSlice } from '@reduxjs/toolkit';
import { ProductsStatus } from 'models/Product';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Params, getProductById, getProducts } from 'api/products';

const initialState = {
  productsList: [],
  productDetails: {},
  productsListStatus: '',
  productDetailsStatus: '',
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (params: Params) => {
  const { data } = await getProducts(params);
  return data;
});

export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (id: string) => {
    const { data } = await getProductById(id);
    return data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.productsListStatus = ProductsStatus.pending;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productsListStatus = ProductsStatus.succeeded;
        state.productsList = action.payload;
      })
      .addCase(fetchProducts.rejected, state => {
        state.productsListStatus = ProductsStatus.failed;
      })

      .addCase(fetchProductById.pending, state => {
        state.productDetailsStatus = ProductsStatus.pending;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.productDetailsStatus = ProductsStatus.succeeded;
        state.productDetails = action.payload;
      })
      .addCase(fetchProductById.rejected, state => {
        state.productDetailsStatus = ProductsStatus.failed;
      });
  },
});

export const results = (state: any): void => state.products;
export default productsSlice.reducer;
