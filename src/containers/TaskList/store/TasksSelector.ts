import { RootState } from "store";

export const selectorTasks = (state: RootState) => state.tasks.tasks
export const selectorActiveFilter = (state: RootState) => state.tasks.activeFilter
export const selectorSearch = (state: RootState) => state.tasks.search