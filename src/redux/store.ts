import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";
import coinsReducer from "./coinsSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    coins: coinsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
