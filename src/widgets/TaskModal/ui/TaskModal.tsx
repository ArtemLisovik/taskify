import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";

import { Button } from '../../../shared/ui/Button/Button'
import Modal from 'shared/ui/Modal/Modal';
import Input from "shared/ui/Input/Input";
import { TextArea } from '../../../shared/ui/TextArea/TextArea'
import { addTask, updateTask } from 'widgets/TaskList/model/TasksThunk'
import { schema } from '../helpers/FormValidation'
import { yupResolver } from '@hookform/resolvers/yup'
import { ITask } from "entities/Task/types/ITask";


import './TaskModal.scss'

interface TaskModalProps {
  isOpen: boolean,
  modalSwitcher: () => void
  task?: ITask
}

export const TaskModal = ({ isOpen, modalSwitcher, task }: TaskModalProps) => {
  const dispatch: any = useDispatch()

  const methods = useForm<ITask>({
    resolver: yupResolver(schema),
    reValidateMode: 'onChange',
    defaultValues: {
      title: `${task ? task.title : ''}`,
      text: `${task ? task.text : ''}`,
      endPointDate: `${task ? task.endPointDate : ``}`,
      endPointTime: `${task ? task.endPointTime : ``}`,
   
    }
  })

  const { handleSubmit, formState: { errors }, reset } = methods

  const onHandleChange: SubmitHandler<ITask> = (data) => {
    const timeCreation = task ? task.timeCreation : new Date()
    console.log(data)
    const newTask: ITask = {...data, timeCreation, status: 'active'}
    modalSwitcher()
    reset()
    task ? dispatch(updateTask(task.id, newTask)) : dispatch(addTask(newTask))
  }

  return (
    <>
      <Modal
        open={isOpen}
        modalSwitcher={modalSwitcher}
      >
        <h3 className="task__title">{task ? `Edit task` : `Create new task`}</h3>
        <FormProvider {...methods}>
          <form className='form' onSubmit={handleSubmit(onHandleChange)}>

            <Input
              name="title"
              placeholder="Task title"
              type='text'
            />
            <div className="error__module">{errors.title?.message}</div>

            <TextArea
              placeholder="What are you planning to do?"
              name='text'
            />
            <div className="error__module">{errors.text?.message}</div>

            <Input
              type='date'
              name="endPointDate"
            />
            <div className="error__module">{errors.endPointDate?.message}</div>

            <Input
              type='time'
              name="endPointTime"
            />
            <div className="error__module">{errors.endPointTime?.message}</div>


            <Button type='neon' content="Done!" />
          </form>
        </FormProvider>
      </Modal>
    </>
  )
}

