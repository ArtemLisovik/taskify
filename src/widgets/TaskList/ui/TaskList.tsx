import React, { FC, useEffect } from "react"
import { useSelector } from "react-redux"
import {AnimatePresence, easeIn, motion} from 'framer-motion'

import {fetchTasks} from '../model/TasksThunk'
import { useAppDispatch, useAppSelector } from "shared/hooks/useRedux"
import { RootState } from "../../../app/store/store"
import { Task } from "../../../features/Task/ui/Task"
import Loader from 'shared/ui/Loader/Loader'

import './TaskList.scss'

export const TaskList: FC = () => {
    const userId = useAppSelector(state => state.auth.userUid)
    const {tasks, tasksLoadingStatus} = useAppSelector(state => state.tasks)
    const dispatch = useAppDispatch()

    const animateOptions = {
        visible: (i:any) => ({
            opacity: 1,
            transition: {delay: i * 0.5},
            y: 0,
            x: 0
        }),
        hidden: {opacity: 0, y: -100, x: -50}
    }

    useEffect(() => {
        if (userId) {
            dispatch(fetchTasks())
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
            .map((task,id) => (
                <motion.div
                    initial={{opacity: 0, x: -10, y: -40}}
                    animate={{opacity: 1, x: 0, y: 0}}
                    transition={{duration: 0.3, delay: id/6}}
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
        return <Loader/>
    }
    return (
        <div className="tasks">
            <AnimatePresence mode="wait">
                {viewedTasks}
            </AnimatePresence>
        </div>
    )

}