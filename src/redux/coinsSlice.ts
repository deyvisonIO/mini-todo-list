import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store"; 
import { create } from "domain";

interface stateInterface {
  value: number,
}

const initialState: stateInterface = {
  value: 0.00,
}

export const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
  }
});

export const { increment } = coinsSlice.actions;
export const selectCoins = (state: RootState) => state.coins.value;

export default coinsSlice.reducer;
