import { FC, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { fetchAllTasks } from "../model/TasksThunk"
import { AppDispatch } from "../../../app/store/store"
import { stateTasks } from "../model/TasksSelect"
import './TaskList.scss'
import { Task } from "../../../entities/ui/Task/Task"

export const TaskList: FC = () => {

    const dispatch: AppDispatch = useDispatch()
    const { tasks, tasksLoadingStatus } = useSelector(stateTasks)

    useEffect(() => {
        dispatch(fetchAllTasks())
    }, [])

    const viewedTasks = tasks?.map(task => {
        return <Task
            title={task.title}
            text={task.text}
            status={task.status}
            key={task.id}
        />
    })

    return (
        <div className="tasks">
            {viewedTasks}
        </div>
    )

}