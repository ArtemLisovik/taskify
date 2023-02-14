import { resolve } from "path/posix";
import { AppDispatch } from "../../../app/store/store";
import { ITask } from "../../../entities/ui/Task/types/ITask";

import { useHttp } from "../../../shared/api/useHttp";
import { tasksFetching, tasksFetched } from "./TasksSlice";

export const fetchAllTasks = () => (dispatch: AppDispatch) => {
  const { request } = useHttp();

    dispatch(tasksFetching());
    request('http://localhost:3001/tasks').then(res => dispatch(tasksFetched(res)))
}
