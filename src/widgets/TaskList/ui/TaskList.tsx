import { FC, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { fetchAllTasks, updateTask } from "../model/TasksThunk"
import { RootState } from "../../../app/store/store"
import { AppDispatch } from "../../../app/store/store"
import { stateTasks } from "../model/TasksSelect"
import { Task } from "../../../entities/Task/ui/Task"
import React from "react"

import './TaskList.scss'


export const TaskList: FC = () => {

    const dispatch: AppDispatch = useDispatch()
    const [iterator, setIterator] = useState(0)
    const { tasks, tasksLoadingStatus } = useSelector(stateTasks)
    const { activeFilter } = useSelector((state: RootState) => state.filter)

    useEffect(() => {
        dispatch(fetchAllTasks())
    }, [iterator]) 

    const viewedTasks = React.useMemo(() => {
        return tasks.filter(task => task.status === activeFilter).map(task => (
            <Task 
               task={task}
               id={task.id}
               title={task.title} 
               text={task.text}
               status={task.status}
               key={task.id}
            />
        ))
    }, [activeFilter, tasks])

    return (
        <div className="tasks">
            {viewedTasks}
        </div>
    )

}