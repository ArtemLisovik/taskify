import { FC, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { fetchAllTasks } from "../model/TasksThunk"
import { RootState } from "../../../app/store/store"
import { AppDispatch } from "../../../app/store/store"
import { stateTasks } from "../model/TasksSelect"
import './TaskList.scss'
import { Task } from "../../../entities/ui/Task/Task"
import React from "react"

export const TaskList: FC = () => {

    const dispatch: AppDispatch = useDispatch()
    const { tasks, tasksLoadingStatus } = useSelector(stateTasks)
    const { activeFilter } = useSelector((state: RootState) => state.filter)

    useEffect(() => {
        dispatch(fetchAllTasks())
    }, []) 

    const viewedTasks = React.useMemo(() => {
        return tasks.filter(task => task.status === activeFilter).map(task => (
            <Task 
               title={task.title} 
               text={task.text}
               status={task.status}
               key={task.id}
            />
        ))
    }, [activeFilter, tasks])

    console.log(viewedTasks)

    return (
        <div className="tasks">
            {viewedTasks}
        </div>
    )

}