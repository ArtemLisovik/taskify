import { FC, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { fetchAllTasks, updateTask } from "../model/TasksThunk"
// import {taskStatusCheck} from 'widgets/TaskList/helpers/taskStatusCheck'
import { RootState } from "../../../app/store/store"
import { AppDispatch } from "../../../app/store/store"
import { stateTasks } from "../model/TasksSelect"
import './TaskList.scss'
import { Task } from "../../../entities/Task/ui/Task"
import React from "react"
import { ITask } from "entities/Task/types/ITask"

export const TaskList: FC = () => {

    const dispatch: AppDispatch = useDispatch()
    const { tasks, tasksLoadingStatus } = useSelector(stateTasks)
    const { activeFilter } = useSelector((state: RootState) => state.filter)

    useEffect(() => {
        dispatch(fetchAllTasks())
    }, []) 
    // useEffect(() => {
    //     TaskStatusCheck()
    // }, [])

    // const TaskStatusCheck = useCallback(() => {
    //     tasks.forEach(task => {
    //         const deadline = new Date(`${task.deadline}`)
    //         if (deadline < new Date()) {
    //             const modifiedTask: ITask = {...task, status: 'failed'}
    //             dispatch(updateTask(task.id, modifiedTask))
    //         }
    //     })
    // }, [])

    const viewedTasks = React.useMemo(() => {
        return tasks.filter(task => task.status === activeFilter).map(task => (
            <Task 
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