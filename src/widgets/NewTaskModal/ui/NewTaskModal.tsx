// import React from 'react'
// import { FormProvider, useForm } from 'react-hook-form'
// import { Button } from '../../../shared/ui'
// import Input from './Input'
// import * as yup from 'yup'
// import { yupResolver } from '@hookform/resolvers/yup'

// import styles from './AddTaskForm.module.scss'

// const taskSchema = yup.object().shape({
//   title: yup.string().required('Title Error'),
//   info: yup.string().required('Info Error'),
//   date: yup.string().required('Data Error'),
//   time: yup.string().required('Time Error')
// })

// const AddTaskForm = () => {

//   const methods = useForm({
//     mode: 'onChange',
//     defaultValues: {
//       title: '',
//       info: '',
//       date: '',
//       time: ''
//     },
//     resolver: yupResolver(taskSchema)
//   })

//   const onSubmit = (data: unknown) => {
//     console.log(data)
//   }

//   return (
//     <FormProvider {...methods}>
//       <form className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>
//         <Input name='title' />
//         <Input name='info' />
//         <Input name='date' type='date' />
//         <Input name='time' type='time' />

//         <button disabled={!methods.formState.isValid}>Create Task</button>
//         {/* <Button type='neon' content='Create Task' /> */}
//       </form>
//     </FormProvider>

//   )
// }

// export default AddTaskForm

import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { useHttp } from "shared/api/useHttp";
import { useDispatch } from "react-redux";

import { Button } from '../../../shared/ui/Button/Button'
import Input from "shared/ui/Input/Input";
import { TextArea } from '../../../shared/ui/TextArea/TextArea'
import { fetchAllTasks } from "widgets/TaskList/model/TasksThunk";
// import { addTask } from "widgets/TaskList/model/TasksThunk";
import {addTask} from 'widgets/TaskList/model/TasksThunk'


import './NewTaskModal.scss'
import { api } from "shared/api/api";
import { AppDispatch } from "app/store/store";
import { ITask } from "entities/Task/types/ITask";

type HandlerChangeProps = {
  handlerChange: () => void;
}

export type NewTask = {
  title: string,
  text: string,
  timeCreation: Object,
  endPointDate: string,
  status: string,
  endPointTime: string,
  users: string
}

export type modifyedTask = {
    deadline: Date;
    timeCreation: Date;
    status: string;
    title: string;
    text: string;
}


export const NewTaskModal = ({ handlerChange }: HandlerChangeProps) => {

  const dispatch: any = useDispatch()

  const methods = useForm<NewTask>()

  const onHandleChange: SubmitHandler<NewTask> = ({title, text,endPointDate, endPointTime}) => {
    const deadline = new Date(`${endPointDate}T${endPointTime}`)
    const nowDate = new Date();
    const newTask: modifyedTask = {deadline, timeCreation: nowDate, status: 'active', title, text}

    handlerChange()
    methods.reset()
    dispatch(addTask(newTask))
  }


  return (
    <>
      <h3 className="task__title">Create new task</h3>
      <FormProvider {...methods}>
        <form className='form' onSubmit={methods.handleSubmit(onHandleChange)}>

          <Input
            placeholder="Task title"
            type='text'
            name='title'
          />
          <div className="error__module">{methods.formState.errors.title?.message}</div>

          <TextArea
            placeholder="What are you planning to do?"
            name='text'
          />
          <div className="error__module">{methods.formState.errors.text?.message}</div>

          <Input
            type='date'
            name="endPointDate"
          />
          <div className="error__module">{methods.formState.errors.endPointDate?.message}</div>

          <Input
            type='time'
            name="endPointTime"
          />
          <div className="error__module">{methods.formState.errors.endPointTime?.message}</div>

          <Button type='neon' content="Done!" />
        </form>
      </FormProvider>
    </>

  )
}
