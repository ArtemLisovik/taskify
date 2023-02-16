import { AppDispatch } from "../../../app/store/store";

<<<<<<< HEAD
=======

>>>>>>> 17e8c0b750e7d653a75d071e3762a1cb823a1dd0
import { useHttp } from "../../../shared/api/useHttp";
import { tasksFetching, tasksFetched } from "./TasksSlice";

export const fetchAllTasks = () => (dispatch: AppDispatch) => {
  const { request } = useHttp();

    dispatch(tasksFetching());
    request('http://localhost:3001/tasks').then(res => dispatch(tasksFetched(res)))
}
