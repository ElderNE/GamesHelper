import { createSlice } from '@reduxjs/toolkit';

export const playersMunchkinSlice = createSlice({
  name: 'playersMunchkin',
  initialState: {
    value: [],
  },
  reducers: {
    addPlayer: (state, player) => {
        if((state.value.length < 10) && player.payload) {
          state.value.push([player.payload, 1])
          if(localStorage)
            localStorage.setItem('munchkin', JSON.stringify(state.value));
        }  
    },
    clearPlayers: (state, player) => {
        state.value = [];
        if(localStorage)
          localStorage.removeItem('munchkin');
    },
    changeCount: (state, player) => {
      if(parseInt(player.payload[0])) {
        state.value[player.payload[1]][1] += parseInt(player.payload[0]);
        if(localStorage)
            localStorage.setItem('uno', JSON.stringify(state.value))
      }
    },
    setValue: (state, player) => {
      state.value = player.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addPlayer, changeCount, clearPlayers, setValue} = playersMunchkinSlice.actions

export default playersMunchkinSlice.reducer