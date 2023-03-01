import { useEffect, useState } from "react";

import { useAppSelector } from "shared/hooks/useRedux"
import { IStatus } from 'entities/Task/types/ITask'
import {deadLineBar} from '../helpers/deadLineBar'


interface TaskDeadLineProps {
    id: string
    onStatusChange: Function
    status: IStatus
}


const TaskDeadline = ({id, onStatusChange, status}: TaskDeadLineProps)=> {
    const [reloader, setReloader] = useState(0)
    
    useEffect(() => {
        const interval = setInterval(() => {
            setReloader(state => state + 1)
        }, 10);
        return () => clearInterval(interval);
      }, []);

    const {tasks} = useAppSelector(state => state.tasks)
    const task = tasks.find(task => task.id === id)
    const {days, hours, minutes, progressBarColor, progress, timeRemainig} = deadLineBar(task?.timeCreation as string, task?.endPointTime as string, task?.endPointDate as string)


    let timeLeft;
    if (days >= 1) {
        timeLeft = <p className="task__time-remaining"><span>{days}</span> days remaining</p>
    } else if (hours > 1) {
        timeLeft = <p className="task__time-remaining"><span>{hours}</span> hours remaining</p>
    } else if (minutes > 0) {
        timeLeft = <p className="task__time-remaining"><span>{minutes}</span> minutes remaining</p>
    } else if (timeRemainig <= 0 && status === 'active') {
        timeLeft = <p className="task__time-remaining">Times up</p>
        // Функция по изменению статуса
        onStatusChange('failed')
    }

    return (
        <>
            <div className="task__progressbar">
                <div className="task__progressbar-fill" style={{width: `${progress}%`, ...progressBarColor}}></div>
            </div>
            {status === 'active' ? timeLeft : null}
        </>
    )
}

export default TaskDeadline