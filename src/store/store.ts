import { configureStore } from "@reduxjs/toolkit";

import tasks from "containers/TaskList/store/TasksSlice";
import { auth } from 'store/AuthSlice'

export const store = configureStore({
  reducer: { tasks, auth },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
