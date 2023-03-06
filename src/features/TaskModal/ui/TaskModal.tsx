import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from '../../../shared/ui/Button/Button'
import { updateTask, addTask } from "widgets/TaskList/model/TasksThunk";
import Modal from 'shared/ui/Modal/Modal';
import Input from "shared/ui/Input/Input";
import { TextArea } from '../../../shared/ui/TextArea/TextArea'
import { schema } from '../helpers/FormValidation'
import { ITask } from "features/Task/types/ITask";
import { useAppDispatch, useAppSelector } from "shared/hooks/useRedux";

import './TaskModal.scss'

interface TaskModalProps {
  isOpen: boolean,
  modalSwitcher: () => void
  task?: ITask
}

export const TaskModal = ({ isOpen, modalSwitcher, task }: TaskModalProps) => {
  const idUser = useAppSelector(state => state.auth.profile?.userUid)

  const dispatch = useAppDispatch()

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

  const { handleSubmit, formState: { errors } } = methods

  const onHandleChange: SubmitHandler<ITask> = async (data) => {
    const timeCreation = task ? task.timeCreation : (new Date()).toString()
    const authorId = idUser ? idUser : null
    const id = uuidv4()
    const newTask: ITask = { ...data, timeCreation, status: 'active', id, authorId}

    task ?
      dispatch(updateTask([data, task.id]))
      :
      dispatch(addTask([newTask, newTask.id]))
    modalSwitcher()
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

