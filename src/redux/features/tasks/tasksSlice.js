import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      state.tasks.push(payload);
    },
  },
});

export const { addTask } = tasksSlice.actions;

export default tasksSlice.reducer;
