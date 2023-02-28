import { FC, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { fetchAllTasks, updateTask } from "../model/TasksThunk"
import { useAppSelector } from "shared/hooks/useRedux"
import { RootState } from "../../../app/store/store"
import { AppDispatch } from "../../../app/store/store"
// import { stateTasks } from "../model/TasksSelect"
import { Task } from "../../../entities/Task/ui/Task"
import React from "react"

import './TaskList.scss'


export const TaskList: FC = () => {

    // const dispatch: AppDispatch = useDispatch()

    const tasks = useAppSelector(state => state.auth.tasks)
    // console.log(tasks)
    const { activeFilter, search } = useSelector((state: RootState) => state.filter)

    const viewedTasks = React.useMemo(() => {
        return tasks?.filter(task => task.status === activeFilter)
            .filter(task =>
            (task.title.toLocaleLowerCase().includes(`${search.toLocaleLowerCase()}`)
                || task.text.toLocaleLowerCase().includes(`${search.toLocaleLowerCase()}`)))
            .map(task => (
                <Task
                    task={task}
                    id={task.id}
                    title={task.title}
                    text={task.text}
                    status={task.status}
                    key={task.id}
                />
            ))
    }, [activeFilter, tasks, search])


    return (
        <div className="tasks">
            {viewedTasks}
        </div>
    )

}