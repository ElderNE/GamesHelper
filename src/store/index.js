import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counter-slice';
import modalReducer from '../features/counter/modal-slice';
import playersUnoReducer from '../features/counter/players-uno-slice';
import playersMunchkinReducer from '../features/counter/players-munchkin-slice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    modal: modalReducer,
    playersUno: playersUnoReducer,
    playersMunchkin: playersMunchkinReducer,
  },
})