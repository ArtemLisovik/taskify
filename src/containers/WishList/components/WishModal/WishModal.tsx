import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Modal, Input, TextArea } from 'ui'
import { schema } from '../../helpers/schema'
import { useAppDispatch, useAppSelector } from "hooks";
import { IWish } from "containers/WishList/types/IWish";

interface WishModalProps {
  modalHandler: any
  wish?: IWish
}

export const WishModal = ({ modalHandler, wish }: WishModalProps) => {
  const idUser = useAppSelector(state => state.auth.profile?.userUid)

  const dispatch = useAppDispatch()

  const methods = useForm<IWish>({
    resolver: yupResolver(schema),
    reValidateMode: 'onChange',
    defaultValues: {
      title: `${wish ? wish.title : ''}`,
      text: `${wish ? wish.text : ''}`,
      image: `${wish ? wish.image: ''}`
    }
  })

  const { handleSubmit, formState: { errors } } = methods

  const onHandleChange: SubmitHandler<IWish> = async (data) => {
    const authorId = idUser ? idUser : null
    const id = uuidv4()
    const newWish: IWish = { ...data, authorId, image: data.image[0]}
    console.log(newWish)
    // wish ?
    //   dispatch(updateTask([data, wish.id]))
    //   :
    //   dispatch(addTask([newTask, newTask.id]))
    modalHandler()
  }

  return (
    <>
      <Modal
        modalSwitcher={modalHandler}
      >
        <h3 className="task__title">{wish ? `Edit your wish` : `Create your new wish`}</h3>
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
              name='image'
              type='file'
              isContext={true}
            />
            <div className="error__module">{errors.image?.message}</div>

            <Button type='neon' content="Done!" />
          </form>
        </FormProvider>
      </Modal>
    </>
  )
}

