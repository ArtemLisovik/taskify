import { configureStore } from "@reduxjs/toolkit";

import tasks from "../../widgets/TaskList/model/TasksSlice";
<<<<<<< HEAD
import filter from '../../widgets/Filters/model/FiltersSlice'
=======
import filter from '../../widgets/Filters/model/FIltersSLice'
>>>>>>> 17e8c0b750e7d653a75d071e3762a1cb823a1dd0

export const store = configureStore({
  reducer: { tasks, filter },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
