import { configureStore } from '@reduxjs/toolkit';
import CartReducer from '../features/cart/cartSlice';
import ClearModalReducer from '../features/clearModal/clearModalSlice';
import BuyModalReducer from '../features/buyModal/buyModalSlice';

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    clearModal: ClearModalReducer,
    buyModal: BuyModalReducer,
  },
});
