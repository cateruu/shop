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
      const existingItem = state.cartItems.find(
        (item) => item.id === payload.id
      );
      if (existingItem) {
        existingItem.amount++;
        state.amount++;
        return;
      }

      state.cartItems.push({ id: payload.id, amount: 1 });
      state.amount++;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
