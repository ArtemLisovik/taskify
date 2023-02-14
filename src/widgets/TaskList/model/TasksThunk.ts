import { AppDispatch } from "../../../app/store/store";
import { ITask } from "../../../entities/ui/Task/types/ITask";

import { useHttp } from "../../../shared/api/useHttp";
import { tasksFetching, tasksFetched } from "./TasksSlice";

export const fetchAllTasks = () => async (dispatch: AppDispatch) => {
  const { request } = useHttp();
  try {
    dispatch(tasksFetching());
    const response: ITask[] = await request("http://localhost:3001/tasks");
    dispatch(tasksFetched(response));
  } catch (error) {}
};
