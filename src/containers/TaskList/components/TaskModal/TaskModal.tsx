import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Modal, Input, TextArea } from 'ui'
import { updateTask, addTask } from "../../store/TasksThunk";
import { schema } from '../../helpers/FormValidation'
import { ITask } from "../../../../types/ITask";
import { useAppDispatch, useAppSelector } from "hooks";

import './TaskModal.scss'

interface TaskModalProps {
  modalSwitcher: any
  task?: ITask
}

export const TaskModal = ({ modalSwitcher, task }: TaskModalProps) => {
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
        // open={isOpen}
        modalSwitcher={modalSwitcher}
      >
        <h3 className="task__title">{task ? `Edit task` : `Create new task`}</h3>
        <FormProvider {...methods}>
          <form className='form' onSubmit={handleSubmit(onHandleChange)}>

            <Input
              isContext={true}
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
              isContext={true}
              type='date'
              name="endPointDate"
            />
            <div className="error__module">{errors.endPointDate?.message}</div>

            <Input
              isContext={true}
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

