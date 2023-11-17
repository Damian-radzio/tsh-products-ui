import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import productsSlice from 'features/products';
import ProductsFiltersSlice from 'features/productsFilters';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    products: productsSlice,
    productsFilters: ProductsFiltersSlice,
  },
});

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
