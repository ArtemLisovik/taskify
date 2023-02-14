import { FC, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { useHttp } from "../../../shared/api/useHttp"
import { fetchAllTasks } from "../model/TasksThunk"
import { AppDispatch, RootState } from "../../../app/store/store"
import { Task } from "../../../entities/ui/Task/Task"
import { tasksFetching, tasksFetched, tasksFetchingError } from '../model/TasksSlice'

import './TaskList.scss'

export const TaskList: FC = () => {

    const { request } = useHttp()
    const dispatch: AppDispatch = useDispatch()

    const taskList = useSelector((state: RootState) => state.tasks.tasks)
    console.log(taskList)

    useEffect(() => {
        dispatch(fetchAllTasks())
    }, [])

    // const viewedTasks = taskList?.map(task => {
    //     <Task 
    //         title={task.title}
    //         text={task.text}
    //         status={task.status}
    //         key={task.id}
    //     />
    // })

    // console.log(viewedTasks)


    return (
        <div className="tasks">
            {taskList.length > 0 ? taskList?.map(task => {
                <Task
                    title={task.title}
                    text={task.text}
                    status={task.status}
                    key={task.id}
                />
                }) : null
            }
        </div>
    )

}