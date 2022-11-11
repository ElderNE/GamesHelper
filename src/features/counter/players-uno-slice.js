import { createSlice } from '@reduxjs/toolkit';

export const playersUnoSlice = createSlice({
  name: 'playersUno',
  initialState: {
    value: [],
  },
  reducers: {
    addPlayer: (state, player) => {
        if((state.value.length < 10) && player.payload) {
          state.value.push([player.payload, 1])
          if(localStorage)
            localStorage.setItem('uno', JSON.stringify(state.value))
        }    
    },
    clearPlayers: (state, player) => {
        state.value = [];
        if(localStorage)
          localStorage.removeItem('uno');
    },
    changeCount: (state, player) => {
        state.value[player.payload[1]][1] =  player.payload[0];
        if(localStorage)
          localStorage.setItem('uno', JSON.stringify(state.value))
    },
    setValue: (state, player) => {
      state.value = player.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addPlayer, changeCount, clearPlayers, setValue} = playersUnoSlice.actions

export default playersUnoSlice.reducer