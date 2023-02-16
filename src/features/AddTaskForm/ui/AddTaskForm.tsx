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

import { useForm } from "react-hook-form";

import Input from "./Input";
import { Button } from "../../../shared/ui";

// type Data = {
//   fir
// }

const AddTaskForm = () => {

  const {
    register,
    formState: {
      errors
    },
    handleSubmit
  } = useForm()


  const onHandleChange = (data: )

  return (

    // <div>hello</div>
    <>
      <form onSubmit={handleSubmit()}>
        <Input name='firstName' />
        <Button type='neon' content="Done!" />
      </form>
    </>
  )
}

export default AddTaskForm;