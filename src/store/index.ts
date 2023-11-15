import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {},
});

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
