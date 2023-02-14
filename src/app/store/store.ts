import { configureStore } from "@reduxjs/toolkit";

import tasks from "../../widgets/TaskList/model/TasksSlice";

export const store = configureStore({
  reducer: { tasks },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
