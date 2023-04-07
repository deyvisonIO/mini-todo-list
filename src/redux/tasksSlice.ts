import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface stateInterface {
  value: string[]
}

interface actionInterface {
  type: string,
  payload: string | payloadInterface,
}

interface payloadInterface {
    index: number,
    newTask?: string,
}

const initialState: stateInterface = {
  value: [],
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state: stateInterface, action: PayloadAction<actionInterface>) => {
      state.value.push(action.payload)
    },
    removeTask: (state: stateInterface, action: PayloadAction<actionInterface>) => {
      const newState: string[] = [];
      const { index } = action.payload;
      const tasksLength: number = state.value.length;
      for (let i: number = 0; i < tasksLength; i++) {
        if (i !== index) {
          newState.push(state.value[i]);
        }
      }
     
      state.value = [...newState];
    },
    editTask: (state: stateInterface, action: actionInterface) => {
      const newState: string[] = [];
      const { index, newTask } = action.payload;
      const tasksLength = state.value.length;
      for (let i = 0; i < tasksLength; i++) {
        if (i == index) {
          newState.push(newTask);
        } else {
          newState.push(state.value[i]);
        }
      }
      
      state.value = [...newState];
    }
  }
});

export const { addTask, removeTask, editTask } = tasksSlice.actions;
export const selectTasks = (state: RootState) => state.tasks.value;

export default tasksSlice.reducer;
