import { FC, useEffect } from "react"
import { useSelector } from "react-redux"

import {fetchTasks} from '../model/TasksThunk'
import { useAppDispatch, useAppSelector } from "shared/hooks/useRedux"
import { RootState } from "../../../app/store/store"
import { Task } from "../../../entities/Task/ui/Task"
import React from "react"

import './TaskList.scss'


export const TaskList: FC = () => {
    const userId = useAppSelector(state => state.auth.userUid)
    const tasks = useAppSelector(state => state.tasks.tasks)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (userId) {
            dispatch(fetchTasks(userId))
        } else {
            console.log('no tasks')
        }
    }, [])

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