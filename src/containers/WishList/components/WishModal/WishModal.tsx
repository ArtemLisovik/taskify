import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Modal, Input, TextArea } from 'ui'
// import { updateTask, addTask } from "../../store/TasksThunk";
import { schema } from '../../helpers/schema'
import { ITask } from "../../../../types/ITask";
import { useAppDispatch, useAppSelector } from "hooks";

interface WishModalProps {
  modalSwitcher: any
  task?: ITask
}

export const TaskModal = ({ modalSwitcher, wish }: WishModalProps) => {
  const idUser = useAppSelector(state => state.auth.profile?.userUid)

  const dispatch = useAppDispatch()

  const methods = useForm<ITask>({
    resolver: yupResolver(schema),
    reValidateMode: 'onChange',
    defaultValues: {
      title: `${wish ? wish.title : ''}`,
      text: `${wish ? wish.text : ''}`,
      endPointDate: `${wish ? wish.endPointDate : ``}`,
      endPointTime: `${wish ? wish.endPointTime : ``}`,
    }
  })

  const { handleSubmit, formState: { errors } } = methods

  const onHandleChange: SubmitHandler<ITask> = async (data) => {
    const timeCreation = wish ? wish.timeCreation : (new Date()).toString()
    const authorId = idUser ? idUser : null
    const id = uuidv4()
    const newTask: ITask = { ...data, timeCreation, status: 'active', id, authorId}

    wish ?
      dispatch(updateTask([data, wish.id]))
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
        <h3 className="task__title">{wish ? `Edit task` : `Create new task`}</h3>
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

