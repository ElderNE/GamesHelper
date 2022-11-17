import { createSlice } from '@reduxjs/toolkit';

export const popUpUpgrade = createSlice({
  name: 'popUpUpdate',
  initialState: {
    value: false,
  },
  reducers: {
    openPopUp: (state) => {
        state.value = true;
    },
    closePopUp: (state) => {
        state.value = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { openPopUp, closePopUp } = popUpUpgrade.actions

export default popUpUpgrade.reducer