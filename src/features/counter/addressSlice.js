import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  info:null
};


const addressSlice = createSlice({
  name: 'Ipaddress',
  initialState,
  reducers: {
    setInfo: (state,action) => {
        state.info = action.payload
    },
     
    }
});

export const { setInfo} = addressSlice.actions;


export const getDetails = (state) => state.Ipaddress.info;       


export default addressSlice.reducer;
