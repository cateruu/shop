import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
  },
});

export const { openFilter, closeFilter } = filterSlice.actions;
export default filterSlice.reducer;