import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      if (state.cartItems.find((item) => item.id === payload.id)) {
        return;
      }

      state.cartItems.push({ id: payload.id, amount: 1 });
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
