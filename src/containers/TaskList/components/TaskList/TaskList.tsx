import React, { useEffect } from "react"
import { AnimatePresence, motion } from 'framer-motion'

import { fetchTasks } from '../../store/TasksThunk'
import { useAppDispatch, useAppSelector } from "hooks/"
import { Task } from "../Task/Task"
import { Loader } from 'ui'

import './TaskList.scss'
import { useSelector } from "react-redux"
import { RootState } from "store"

export const TaskList = () => {
    const userId = useAppSelector(state => state.auth.profile?.userUid)
    const { tasks, tasksLoadingStatus } = useSelector((state: RootState) => state.tasks)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (userId) {
            dispatch(fetchTasks())
        } else {
            console.log('Need to auth')
        }
    }, [])

    const { activeFilter, search } = useAppSelector((state) => state.tasks)

    const viewedTasks = React.useMemo(() => {
        return tasks?.filter(task => task.status === activeFilter)
            .filter(task =>
            (task.title.toLocaleLowerCase().includes(`${search.toLocaleLowerCase()}`)
                || task.text.toLocaleLowerCase().includes(`${search.toLocaleLowerCase()}`)))
            .map((task, id) => (
                <motion.div
                    initial={{ y: 50, x: 50, opacity: 0, scale: 0.5 }}
                    animate={{y: 0, x: 0, opacity: 1, scale: 1}}
                    transition={{ duration: 0.3, delay: id/6 }}
                    // exit={{ y: 50, x: 50, opacity: 0, scale: 0.5}}
                    key={task.id}
                >
                    <Task
                        task={task}
                        id={task.id}
                        title={task.title}
                        text={task.text}
                        status={task.status}
                    />
                </motion.div>
            ))
    }, [activeFilter, tasks, search])

    if (tasksLoadingStatus === 'loading') {
        return <Loader />
    }
    return (
            <div className="tasks">
                <AnimatePresence mode="popLayout" onExitComplete={() => null}>
                    {viewedTasks}
                </AnimatePresence>
            </div>
    )

}