import { FC, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { fetchAllTasks } from "../model/TasksThunk"
import { AppDispatch } from "../../../app/store/store"
import { stateTasks } from "../model/TasksSelect"
import './TaskList.scss'
import { Task } from "../../../entities/ui/Task/Task"
import { selectActiveFilter } from "../../Filters/model/FilterSelect"
import { filterStatus } from "../helpers/filterStatus"
import React from "react"

export const TaskList: FC = () => {

    const dispatch: AppDispatch = useDispatch()
    const { tasks } = useSelector(stateTasks)
    const filterActive = useSelector(selectActiveFilter)

    useEffect(() => {
        dispatch(fetchAllTasks())
    }, [dispatch])

    const visibalData = React.useMemo(() => filterStatus(filterActive, tasks), [filterActive, tasks])

    const viewedTasks = visibalData?.map(task => {
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