import { createSlice } from '@reduxjs/toolkit';

export interface FiltersState {
  search: string;
  limit: number;
  page: number;
  promo: boolean;
  active: boolean;
}

const initialState = {
  productsFilters: {
    search: '',
    limit: 0,
    page: 0,
    promo: null,
    active: null,
  },
};
const ProductsFiltersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    updateFilters: (state, action) => {
      state.productsFilters = { ...state.productsFilters, ...action.payload };
    },
  },
});

export const { updateFilters } = ProductsFiltersSlice.actions;
export default ProductsFiltersSlice.reducer;
