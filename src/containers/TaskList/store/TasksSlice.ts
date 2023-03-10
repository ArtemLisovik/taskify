import { createSlice } from "@reduxjs/toolkit";

import { ITask, IStatus } from "../../../types/ITask";
import { fetchTasks, deleteTask, updateTask, addTask, fetchTaskFilters } from "./TasksThunk";

type IState = {
  tasks: [] | ITask[];
  tasksLoadingStatus: string;
  taskFilters: string[]
  activeFilter: IStatus
  search: string
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
  taskFilters: [],
  activeFilter: 'active',
  search: ''
};


const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    onSearch: (state, action) => {
      state.search = action.payload
    },
    setActiveFilter: (state, action) => {
      state.activeFilter = action.payload
    }
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchTasks.pending, state => { state.tasksLoadingStatus = "loading" })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.tasksLoadingStatus = "idle";
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


      .addCase(fetchTaskFilters.pending, () => {})
      .addCase(fetchTaskFilters.fulfilled, (state, action) => {
          state.taskFilters = action.payload
      })
      .addCase(fetchTaskFilters.rejected, () => {})
  }

})

const { reducer, actions } = tasksSlice;
export const {onSearch, setActiveFilter} = actions

export default reducer;