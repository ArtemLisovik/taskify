import { useAppSelector } from "shared/hooks/useRedux"
// import { useEffect } from "react";
import {deadLineBar} from '../helpers/deadLineBar'

const TaskDeadline = ({id}: {id: number})=> {
    const {tasks} = useAppSelector(state => state.tasks)
    const task = tasks.find(task => task.id === id)
    const {days, hours, minutes, colors, progress, timeRemainig} = deadLineBar(task?.timeCreation as string, task?.deadline as string)
    
    console.log(timeRemainig, task?.title)

    let timeLeft;
    if (timeRemainig < 0) {
        timeLeft = <p className="task__time-remaining">Task failed</p>
    } else if (days) {
        timeLeft = <p className="task__time-remaining"><span>{days}</span> days remaining</p>

    } else if (hours) {
        timeLeft = <p className="task__time-remaining"><span>{hours}</span> hours remaining</p>
    } else if (minutes) {
        timeLeft = <p className="task__time-remaining"><span>{minutes}</span> minutes remaining</p>
    } 

    return (
        <>
            <div className="task__progressbar">
                <div className="task__progressbar-fill" style={{width: `${progress}%`, background: `${colors}`}}></div>
            </div>
            {timeLeft}
        </>
    )
}

export default TaskDeadline