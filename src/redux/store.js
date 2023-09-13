import { configureStore } from '@reduxjs/toolkit';
import cartReducers from './reducers/cartReducers';

export const store=configureStore({
  reducer:{
cartReducers: cartReducers,
  }
})
