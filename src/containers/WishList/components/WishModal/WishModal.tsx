import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Modal, Input, TextArea, Select } from 'ui'
import { schema } from '../../helpers/schema'
import { useAppDispatch, useAppSelector } from "hooks";
import { IWish } from "containers/WishList/types/IWish";
import {createNewWish, updateWish} from '../../store/WishThunk'
import { useDispatch } from "react-redux";
import { AppDispatch } from "store";

interface WishModalProps {
  modalHandler: any
  wish?: Partial<IWish>
  isOpen: boolean
}

export const WishModal = ({ modalHandler, wish, isOpen }: WishModalProps) => {
  const idUser = useAppSelector(state => state.auth.profile?.userUid)

  const dispatch = useDispatch<AppDispatch>()

  const methods = useForm<IWish>({
    resolver: yupResolver(schema),
    reValidateMode: 'onChange',
    defaultValues: {
      title: `${wish ? wish.title : ''}`,
      text: `${wish ? wish.text : ''}`,
      image: `${wish ? wish.image: ''}`,
      mode: `${wish ? wish.mode: ''}`,
    }
  })

  const { handleSubmit, formState: { errors } } = methods

  const onHandleChange: SubmitHandler<IWish> = async (data) => {
    const authorId = idUser ? idUser : null
    const wishId = uuidv4()
    const newWish: IWish = wish ? 
      {
        title: data.title, 
        text: data.text,
        image: wish.image as string, 
        id: wish.id as string, 
        authorId: wish.authorId as string,
        mode: data.mode,
        status: wish.status as string
      } 
      : 
      { 
        title: data.title, 
        text: data.text, 
        image: '', 
        authorId, 
        id: wishId,
        mode: data.mode,
        status: 'current'
      }

    wish ?

      data.image ? 
        dispatch(updateWish([newWish, data.image[0]]))
       : dispatch(updateWish([newWish]))

      : dispatch(createNewWish([newWish, wishId, data.image[0]]))
    modalHandler()
  }

  if (!isOpen) return null
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

            <Select 
              isContext={true}
              defaultOption={{value: '', content: 'Choose visibility mode...', hidden: true}}
              options={[
                {value: 'privat', content: 'Privat'},
                {value: 'public', content: 'Public'}
              ]}
            />
              <div className="error__module">{errors.mode?.message}</div>

            <Button type='neon' content="Done!" />
          </form>
        </FormProvider>
      </Modal>
    </>
  )
}

