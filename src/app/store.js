import { configureStore } from '@reduxjs/toolkit';
import CartReducer from '../features/cart/cartSlice';
import ClearModalReducer from '../features/clearModal/clearModalSlice';

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    clearModal: ClearModalReducer,
  },
});
