import { createSlice } from "@reduxjs/toolkit";

import { ITask } from "../../../features/Task/types/ITask";
import { fetchTasks, deleteTask, updateTask, addTask } from "./TasksThunk";

type IState = {
  tasks: [] | ITask[];
  tasksLoadingStatus: string;
}
type payloadAction = {
  modified: Object,
  taskId: string
}
type updateAction = {
  type: string,
  meta: Object,
  payload: payloadAction
}

const initialState: IState = {
  tasks: [],
  tasksLoadingStatus: "idle",
};


const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchTasks.pending, state => { state.tasksLoadingStatus = "loading" })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasksLoadingStatus = "idle";
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, state => { state.tasksLoadingStatus = "error" })


      .addCase(addTask.pending, () => { })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks = [...state.tasks, action.payload]
      })
      .addCase(addTask.rejected.type, () => { })


      .addCase(updateTask.pending, () => {})
      .addCase(updateTask.fulfilled.type, (state, action: updateAction) => {
        state.tasks = state.tasks.map(task => task.id === action.payload.taskId ? {...task, ...action.payload.modified} : task)
      })
      .addCase(updateTask.rejected.type, (state) => {
        state.tasks = state.tasks
        console.log('error')
      })


      .addCase(deleteTask.pending, () => {})
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(task => task.id !== action.payload)
      })
      .addCase(deleteTask.rejected, (state) => {
        state.tasks = state.tasks
      })
  }

})

const { reducer } = tasksSlice;

export default reducer;