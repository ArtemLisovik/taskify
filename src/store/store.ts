import { configureStore } from "@reduxjs/toolkit";

import tasks from "containers/TaskList/store/TasksSlice";
import {wishReducer} from 'containers'
import { auth } from 'store/AuthSlice'

export const store = configureStore({
  reducer: { tasks, auth, wishReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
