import { FC, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { fetchAllTasks } from "../model/TasksThunk"
<<<<<<< HEAD
import { RootState } from "../../../app/store/store"
=======
>>>>>>> 17e8c0b750e7d653a75d071e3762a1cb823a1dd0
import { AppDispatch } from "../../../app/store/store"
import { stateTasks } from "../model/TasksSelect"
import './TaskList.scss'
import { Task } from "../../../entities/ui/Task/Task"
<<<<<<< HEAD
import React from "react"
=======
>>>>>>> 17e8c0b750e7d653a75d071e3762a1cb823a1dd0

export const TaskList: FC = () => {

    const dispatch: AppDispatch = useDispatch()
    const { tasks, tasksLoadingStatus } = useSelector(stateTasks)
<<<<<<< HEAD
    const { activeFilter } = useSelector((state: RootState) => state.filter)
=======
>>>>>>> 17e8c0b750e7d653a75d071e3762a1cb823a1dd0

    useEffect(() => {
        dispatch(fetchAllTasks())
    }, []) 

<<<<<<< HEAD
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
=======
    const viewedTasks = tasks?.map(task => {
        return <Task
            title={task.title}
            text={task.text}
            status={task.status}
            key={task.id}
        />
    })
>>>>>>> 17e8c0b750e7d653a75d071e3762a1cb823a1dd0

    return (
        <div className="tasks">
            {viewedTasks}
        </div>
    )

}