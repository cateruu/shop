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

      state.cartItems.push({
        id: payload.id,
        name: payload.name,
        image: payload.image,
        price: payload.price,
        amount: 1,
      });
      state.amount++;
    },
    removeItem: (state, { payload }) => {
      const itemID = payload.id;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemID);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    calculateTotalCost: (state) => {
      let amount = 0;
      let total = 0;

      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.price * item.amount;
      });

      state.amount = amount;
      state.total = total;
    },
    changeItemAmount: (state, { payload }) => {
      const item = state.cartItems.find((item) => item.id === payload.id);

      switch (payload.action) {
        case 'increase':
          item.amount++;
          break;
        case 'decrease':
          item.amount--;
          break;
        default:
          console.error('Unknown action in Change Item Amount');
          break;
      }
    },
  },
});

export const {
  addItem,
  clearCart,
  removeItem,
  calculateTotalCost,
  changeItemAmount,
} = cartSlice.actions;
export default cartSlice.reducer;
