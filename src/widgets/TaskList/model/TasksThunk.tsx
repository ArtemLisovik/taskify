import { AppDispatch } from "../../../app/store/store";
import { setDoc, doc, arrayUnion, getDoc, updateDoc, collection, query, where,getDocs } from 'firebase/firestore'

import { ITask } from "entities/Task/types/ITask";
import { api } from '../../../shared/api/api'
import { tasksFetching, tasksFetched, tasksFetchingError } from "./TasksSlice";
import { database } from "shared/config/firebase";
import { useAppSelector } from "shared/hooks/useRedux";

// export const fetchAllTasks = () => (dispatch: AppDispatch) => {
//     dispatch(tasksFetching());
//     api.get('/tasks').then(res => dispatch(tasksFetched(res.data)))
// }

export const fetchTasks = (userId: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(tasksFetching())
    let filteredTasks: Array<any> = []
    const tasksFilterSetup = query(collection(database, "tasks"), where("authorId", "==", userId));
    const tasksCollection = await getDocs(tasksFilterSetup);
    tasksCollection.forEach((task) => filteredTasks.push(task.data()))
    dispatch(tasksFetched(filteredTasks))
  }
  catch(error) {
    dispatch(tasksFetchingError())
    console.log(error)
    throw new Error(`${error}`)
  }
 
  // try {
  //   dispatch(tasksFetching())
  //   const {userTasks}: any = (await getDoc(doc(database, 'tasks', userId))).data()
  //   // console.log(userTasks)
  //   dispatch(tasksFetched(userTasks))
  // } 
  // catch(error) {
  //   dispatch(tasksFetchingError())
  //   console.log(error)
  // }
}

export const addTask = (task: ITask, idUser: string) => async (dispatch: AppDispatch) => {
  await setDoc(doc(database, "tasks", task.id), task)
  dispatch(fetchTasks(idUser))
}

export const updateTask = (modifiedTask: Object, userId: string, id: string) => async (dispatch: AppDispatch) => {
  // database.collection("users").doc("frank").set({
  //   name: "Frank",
  //   favorites: {
  //     food: "Pizza",
  //     color: "Blue",
  //     subject: "Recess"
  //   },
  //   age: 12
  // }).then(function() {
  //   console.log("Frank created");
  // });


  // database.collection("tasks").doc("frank").update({
  //   favorites: {
  //     food: "Ice Cream"
  //   }
  // }).then(function() {
  //   console.log("Frank food updated");
  // });

  // await updateDoc(doc(database, 'tasks', userId), {
  //   userTasks: arrayUnion(
  //     [0]
  //   )
  // })

  // const {userTasks}: any = (await getDoc(doc(database, 'tasks', userId))).data()
  // const task = userTasks.find((task: ITask) => task.id === id)
  // console.log(task)
  // await updateDoc(doc(database, 'tasks', userId), {
  // })
  // console.log(taskList)
  // api.put(`/tasks/${id}`, data).then(() => dispatch(fetchTasks(userId)))

}

// export const deleteTask = (id: number) => (dispatch: AppDispatch) => {
//   api.delete(`/tasks/${id}`).then(() => dispatch(fetchAllTasks()))
// }

// export const addTask = (data: ITask) => (dispatch: AppDispatch) => {
//   api.post('/tasks', data).then(() => dispatch(fetchAllTasks()))
// }

