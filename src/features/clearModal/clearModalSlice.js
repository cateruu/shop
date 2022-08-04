import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const clearModalSlice = createSlice({
  name: 'clearModal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = clearModalSlice.actions;
export default clearModalSlice.reducer;
