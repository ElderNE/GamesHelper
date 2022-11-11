import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    value: false,
  },
  reducers: {
    openModal: (state) => {
        state.value = true;
    },
    closeModal: (state) => {
        state.value = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { openModal, closeModal, } = modalSlice.actions

export default modalSlice.reducer