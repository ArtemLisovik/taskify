import { AppDispatch } from "../../../app/store/store";

import { ITask } from "entities/Task/types/ITask";
import {api} from '../../../shared/api/api'
import { tasksFetching, tasksFetched, tasksFetchingError } from "./TasksSlice";
import { getDoc, doc } from "firebase/firestore";
import { database } from "shared/config/firebase";

// export const fetchAllTasks = () => (dispatch: AppDispatch) => {
//     dispatch(tasksFetching());
//     api.get('/tasks').then(res => dispatch(tasksFetched(res.data)))
// }

export const fetchTasks = (userId: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(tasksFetching())
    const {userTasks}: any = (await getDoc(doc(database, 'tasks', userId))).data()
    const userTaskList: ITask[] = [...userTasks]
    dispatch(tasksFetched(userTaskList))
  } 
  catch(error) {
    dispatch(tasksFetchingError())
    console.log(error)
  }

}


// export const updateTask = (id: number, data: ITask) => (dispatch: AppDispatch) => {
//   api.put(`/tasks/${id}`, data).then(() => dispatch(fetchAllTasks()))
// }

// export const deleteTask = (id: number) => (dispatch: AppDispatch) => {
//   api.delete(`/tasks/${id}`).then(() => dispatch(fetchAllTasks()))
// }

// export const addTask = (data: ITask) => (dispatch: AppDispatch) => {
//   api.post('/tasks', data).then(() => dispatch(fetchAllTasks()))
// }

