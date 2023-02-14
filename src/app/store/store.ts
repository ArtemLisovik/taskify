import { configureStore } from "@reduxjs/toolkit";

import tasks from "../../widgets/TaskList/model/TasksSlice";
import filter from '../../widgets/Filters/model/FIltersSLice'

export const store = configureStore({
  reducer: { tasks, filter },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
