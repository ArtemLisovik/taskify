import { FC, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { fetchAllTasks } from "../model/TasksThunk"
import { RootState } from "../../../app/store/store"
import { AppDispatch } from "../../../app/store/store"
import { stateTasks } from "../model/TasksSelect"
import './TaskList.scss'
import { Task } from "../../../entities/Task/ui/Task"
import React from "react"

export const TaskList: FC = () => {

    const dispatch: AppDispatch = useDispatch()
    const { tasks, tasksLoadingStatus } = useSelector(stateTasks)
    const { activeFilter } = useSelector((state: RootState) => state.filter)

    useEffect(() => {
        dispatch(fetchAllTasks())
    }, []) 

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //       window.location.reload();
    //     }, 6000); // обновление каждую минуту
    
    //     return () => clearInterval(intervalId);
    //   }, []);

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