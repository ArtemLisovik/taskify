import { AppDispatch, RootState } from "../../../app/store/store";
import { setDoc, doc, onSnapshot, updateDoc, collection, query, where,getDocs, deleteDoc } from 'firebase/firestore'

import taskActions from '../model/TasksSlice'
import { ITask } from "features/Task/types/ITask";
import { api } from '../../../shared/api/api'
// import { tasksFetching, tasksFetched, tasksFetchingError } from "./TasksSlice";
import { database } from "shared/config/firebase";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { authActions } from "app/store/AuthSlice";

export const fetchTasks = createAsyncThunk('fetchTasks', async (_, {getState, rejectWithValue}) => {
  const userId = (getState() as RootState).auth.userUid
  try {
    let filteredTasks: Array<any> = []
    const tasksFilterSetup = query(collection(database, "tasks"), where("authorId", "==", userId));
    const tasksCollection = await getDocs(tasksFilterSetup);
    tasksCollection.forEach((task) => filteredTasks.push(task.data()))
    return filteredTasks
  }
  catch(error) {
    return rejectWithValue((error as Error).message)
  }
})


// export const addTask = (task: ITask, idUser: string) => async (dispatch: AppDispatch) => {
//   await setDoc(doc(database, "tasks", task.id), task)
//   dispatch(fetchTasks())
// }

export const addTask = createAsyncThunk('tasks/addTask', async ([task, taskId]: [ITask, string]) => {
  try{
    await setDoc(doc(database, 'tasks', taskId), task)
    return task
  }
  catch(error) {
    throw new Error('error')
  }
})


type updateDto = {} & Partial<ITask>
export const updateTask = createAsyncThunk('tasks/updateTask', async ([modified, taskId]: [updateDto,string]) => {
  console.log(taskId)
  await updateDoc(doc(database, 'tasks', taskId), {
    ...modified
  })
  return {modified, taskId}
})

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (taskId: string) => {
  try {
    await deleteDoc(doc(database, "tasks", taskId));
    return taskId
  }
  catch(error){
    console.log('error')
    throw new Error(`${console.log(error)}`)
  }
})
