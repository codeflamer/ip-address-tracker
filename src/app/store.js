import { configureStore } from '@reduxjs/toolkit';
import addressReducer from '../features/counter/addressSlice';

export const store = configureStore({
  reducer: {
    Ipaddress: addressReducer,
  },
});
