import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from 'app/store/store'
import {deleteTask, updateTask} from 'widgets/TaskList/model/TasksThunk'
import { Button } from '../../../shared/ui/Button/Button'
import userAvatar from '../user.jpg'
// import { updateTask, deleteTask } from '../../../widgets/TaskList/model/TasksThunk'
import TaskDeadline from './TaskDeadline'
import { IStatus, ITask } from 'features/Task/types/ITask'
import { AppDispatch } from 'app/store/store'
import { TaskModal } from 'features/TaskModal/ui/TaskModal'

import './Task.scss'

interface PropsTask {
    id: string,
    title: string,
    text: string,
    status: IStatus
    task: ITask
}

export const Task = ({ title, text, status, id, task }:PropsTask) => {
    const [editModalOpen, setEditModalOpen] = useState(false)
    const dispatch: AppDispatch = useDispatch()
    const allTasks = useSelector((state: RootState) => state.tasks.tasks)

    const onStatusChange = (status: IStatus) => {
        const task = allTasks?.find(task => task.id === id)
        if (task) {
            dispatch(updateTask([{ status: status }, id]))
        }
    }

    const onEditTask = () => {
        setEditModalOpen(state => !state)
    }

    let content;
    switch (status) {
        case 'active': {
            content = <Button
                name='completed'
                content='Complete'
                type='simple'
                onClick={onStatusChange} />
            break;
        }
        case 'completed': {
            content = <p style={{ color: '#21f21b', marginTop: '8px', fontWeight: '600' }}>This task has been completed!</p>
            break;
        }
        case 'failed': {
            content = <p style={{ color: 'red', marginTop: '8px', fontWeight: '600' }}>This task has been failed!</p>
            break;
        }
    }

    const modalView = editModalOpen ? 
        <TaskModal
            isOpen={editModalOpen}
            modalSwitcher={onEditTask}
            task={task}
        /> : null

    return (
        <>
            {modalView}
                  <div className="tasks__item task">
                      <h3 className="task__title">{title}</h3>
                      <p className="task__descr">{text}</p>
  
                      {status === 'active' ? <TaskDeadline id={id} onStatusChange={onStatusChange} status={status} /> : null}
  
                      {content}
  
                      <div className="task__options">
                          <div className="task__users">
                              <a href="#" className="task__users-link">
                                  <img src={userAvatar} alt="user avatar" className="task__users-image" />
                              </a>
                              <a href="#" className="task__users-link">
                                  <img src={userAvatar} alt="user avatar" className="task__users-image" />
                              </a>
                          </div>
                          <div className="task__pin">
                              <svg className="task__pin-icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                  width="408.318px" height="408.318px" viewBox="0 0 408.318 408.318"
                                  xmlSpace="preserve">
                                  <g>
                                      <path d="M265.48,134.831l-13.388-13.388L89.531,284.006c-15.3,15.3-15.3,38.25,0,53.55c15.3,15.3,38.25,15.3,53.55,0
          l223.762-223.762c26.775-26.775,26.775-68.85,0-93.712c-26.774-26.775-68.85-26.775-95.625,0L49.369,243.843
          c-38.25,38.25-36.338,97.538,0,135.788c38.25,38.25,97.537,38.25,135.787,0l162.562-162.562l-15.3-15.3L169.856,364.33
          c-30.6,30.601-78.413,30.601-109.013,0c-30.6-30.6-30.6-78.412,0-109.012l223.762-221.85c19.125-19.125,49.725-19.125,66.938,0
          c19.125,19.125,19.125,49.725,0,66.938l-221.85,223.762c-7.65,7.65-19.125,7.65-26.775,0s-7.65-19.125,0-26.775L265.48,134.831z"/>
                                  </g>
                                  <g>
                                  </g>
                                  <g>
                                  </g>
                                  <g>
                                  </g>
                                  <g>
                                  </g>
                                  <g>
                                  </g>
                                  <g>
                                  </g>
                                  <g>
                                  </g>
                                  <g>
                                  </g>
                                  <g>
                                  </g>
                                  <g>
                                  </g>
                                  <g>
                                  </g>
                                  <g>
                                  </g>
                                  <g>
                                  </g>
                                  <g>
                                  </g>
                                  <g>
                                  </g>
                              </svg>
                              <p className="task__pin-count">2</p>
                          </div>
  
                          <div className="task__options-menu options__dropdown">
                              <button className="options__dropdown-button">
                                  <span className="options__dropdown-button-dot options__button-dot"></span>
                                  <span className="options__dropdown-button-dot options__button-dot"></span>
                                  <span className="options__dropdown-button-dot options__button-dot"></span>
                              </button>
                              <div className="options__dropdown-menu">
                                  <button
                                      className='options__dropdown-menu-item'
                                      onClick={() => setEditModalOpen(state => !state)}
                                  >Edit</button>
                                  <button
                                      className="options__dropdown-menu-item"
                                      onClick={() => {
                                        dispatch(deleteTask(id))
                                      }}>
                                      Delete</button>
                              </div>
                          </div>
                      </div>
                  </div>
        </>

    )
}

