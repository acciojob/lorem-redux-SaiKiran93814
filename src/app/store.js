import { configureStore } from '@reduxjs/toolkit';
import loremReducer from '../features/loremSlice';

export const store = configureStore({
  reducer: {
    lorem: loremReducer,
  },
});
