import { AppDispatch } from "../../../app/store/store";

import { useHttp } from "../../../shared/api/useHttp"; 
import {tasksFetching, tasksFetched, tasksFetchingError} from './TasksSlice'

export const fetchAllTasks = () => (dispatch: AppDispatch) => {

    const { request } = useHttp()

    dispatch(tasksFetching())
    request('http://localhost:3001/tasks')
        .then(data => dispatch(tasksFetched(data)))
        // .catch(tasksFetchingError())
}