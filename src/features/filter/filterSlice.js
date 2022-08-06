import { createSlice } from '@reduxjs/toolkit';
import products from '../../products.json';

const initialState = {
  products: [...products],
  isOpen: false,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    openFilter: (state) => {
      state.isOpen = true;
    },
    closeFilter: (state) => {
      state.isOpen = false;
    },
    sortProducts: (state, { payload }) => {
      switch (payload.type) {
        case 'name':
          if (payload.action === 'ascending') {
            state.products.sort((a, b) =>
              a.name > b.name ? 1 : a.name < b.name ? -1 : 0
            );
          } else if (payload.action === 'descending') {
            state.products.sort((a, b) =>
              a.name < b.name ? 1 : a.name > b.name ? -1 : 0
            );
          }
          break;
        case 'price':
          if (payload.action === 'ascending') {
            state.products.sort((a, b) =>
              a.price > b.price ? 1 : a.price < b.price ? -1 : 0
            );
          } else if (payload.action === 'descending') {
            state.products.sort((a, b) =>
              a.price < b.price ? 1 : a.price > b.price ? -1 : 0
            );
          }
          break;
        default:
          console.error('Unexpected parameter in filter sort function!');
          break;
      }
    },
  },
});

export const { openFilter, closeFilter, sortProducts } = filterSlice.actions;
export default filterSlice.reducer;
