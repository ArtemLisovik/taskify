// import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import * as yup from 'yup'

// import { Button } from '../../../shared/ui/Button/Button'
// import Modal from 'shared/ui/Modal/Modal';
// import Input from "shared/ui/Input/Input";
// import { TextArea } from '../../../shared/ui/TextArea/TextArea'
// import { addTask } from 'widgets/TaskList/model/TasksThunk'


// import './TaskModal.scss'


// export type NewTask = {
//   title: string,
//   text: string,
//   timeCreation: Object,
//   endPointDate: string,
//   status: string,
//   endPointTime: string,
//   users: string
// }

// export type modifyedTask = {
//   deadline: Date;
//   timeCreation: Date;
//   status: string;
//   title: string;
//   text: string;
// }

// interface TaskModalProps {
//   isOpen: boolean,
//   modalSwitcher: () => void
//   id?: number
// }

// export const TaskModal = ({ isOpen, modalSwitcher, id }: TaskModalProps) => {
//   const dispatch: any = useDispatch()

//   const methods = useForm<NewTask>()

//   const onHandleChange: SubmitHandler<NewTask> = ({ title, text, endPointDate, endPointTime }) => {
//     const deadline = new Date(`${endPointDate}T${endPointTime}`)
//     const nowDate = new Date();
//     const newTask: modifyedTask = { deadline, timeCreation: nowDate, status: 'active', title, text }

//     modalSwitcher()
//     methods.reset()
//     dispatch(addTask(newTask))
//   }


//   return (
//     <>
//       <Modal
//         open={isOpen}
//         modalSwitcher={modalSwitcher}
//       >
//         <h3 className="task__title">Create new task</h3>
//         <FormProvider {...methods}>
//           <form className='form' onSubmit={methods.handleSubmit(onHandleChange)}>

//             <Input
//               placeholder="Task title"
//               type='text'
//               name='title'
//             />
//             <div className="error__module">{methods.formState.errors.title?.message}</div>

//             <TextArea
//               placeholder="What are you planning to do?"
//               name='text'
//             />
//             <div className="error__module">{methods.formState.errors.text?.message}</div>

//             <Input
//               type='date'
//               name="endPointDate"
//             />
//             <div className="error__module">{methods.formState.errors.endPointDate?.message}</div>

//             <Input
//               type='time'
//               name="endPointTime"
//             />
//             <div className="error__module">{methods.formState.errors.endPointTime?.message}</div>

//             <Button type='neon' content="Done!" />
//           </form>
//         </FormProvider>

//       </Modal>
//     </>
//   )
// }

import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";

import { Button } from '../../../shared/ui/Button/Button'
import Modal from 'shared/ui/Modal/Modal';
import Input from "shared/ui/Input/Input";
import { TextArea } from '../../../shared/ui/TextArea/TextArea'
import { addTask } from 'widgets/TaskList/model/TasksThunk'
import { INewTask } from '../helpers/FormValidation'
import { schema } from '../helpers/FormValidation'
import { yupResolver } from '@hookform/resolvers/yup'
import { ITask } from "entities/Task/types/ITask";


import './TaskModal.scss'

// export type modifyedTask = {
//   deadline: Date;
//   timeCreation: Date;
//   status: string;
//   title: string;
//   text: string;
// }

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
      text: `${task ? task.text : ''}`
      // endPointDate: `${task ? new Date(task.deadline) : ''}`
    }
  })

  const { handleSubmit, formState: { errors }, reset } = methods

  const onHandleChange: SubmitHandler<ITask> = (data) => {
    const timeCreation = new Date()
    console.log(data)
    const newTask: ITask = {...data, timeCreation, status: 'active'}
    modalSwitcher()
    reset()
    dispatch(addTask(newTask))
  }

  return (
    <>
      <Modal
        open={isOpen}
        modalSwitcher={modalSwitcher}
      >
        <h3 className="task__title">Create new task</h3>
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
