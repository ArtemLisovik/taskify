import { setDoc, doc, updateDoc, collection, query, where,getDocs, deleteDoc } from 'firebase/firestore'
import { createAsyncThunk } from "@reduxjs/toolkit";

import { ITask } from "features/Task/types/ITask";
import { RootState } from "../../../app/store/store";
import { database } from "shared/config/firebase";


export const fetchTasks = createAsyncThunk('fetchTasks', async (_, {getState, rejectWithValue}) => {
  const userId = (getState() as RootState).auth.profile.userUid
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
