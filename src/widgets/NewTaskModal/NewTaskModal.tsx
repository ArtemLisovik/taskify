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

import { Button } from '../../shared/ui/Button/Button'
import Input from "shared/ui/Input/Input";
import { TextArea } from '../../shared/ui/TextArea/TextArea'

import './NewTaskModal.scss'

type Data = {
  firstName: string,
  endPointDate: string,
  endPointTime: string
}

export const NewTaskModal = () => {

  const { formState: { errors }, handleSubmit, reset, register } = useForm<Data>()
  const methods = useForm()


  const onHandleChange: SubmitHandler<Data> = (data) => {
    console.log(data)
    reset()
  }

  return (
    <>
      <h3 className="task__title">Create new task</h3>
      <FormProvider {...methods}>
        <form className='form' onSubmit={handleSubmit(onHandleChange)}>

          <Input
            placeholder="Task title"
            type='text'
          />
          {errors.firstName?.message && <div>{errors.firstName?.message}</div>}
          {/* <TextArea
  placeholder="What are you planning to do?"
/> */}
          {/* 
<Input
  type='date'
  {...register('endPointDate', {
    required: 'Please choose a date of deadline'
  })}
/> */}

          {/* <Input
  type='time'
  {...register('endPointTime', {
    required: 'Please choose a time of deadline'
  })}
/> */}

          <Button type='neon' content="Done!" />
        </form>
      </FormProvider>
    </>

  )
}
