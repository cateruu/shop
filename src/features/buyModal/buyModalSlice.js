import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const buyModalSlice = createSlice({
  name: 'buyModal',
  initialState,
  reducers: {
    showModal: (state) => {
      state.isOpen = true;
    },
    hideModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { showModal, hideModal } = buyModalSlice.actions;
export default buyModalSlice.reducer;
