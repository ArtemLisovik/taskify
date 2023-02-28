import { Link, useNavigate } from "react-router-dom"
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { useEffect } from "react"

import Input from "shared/ui/Input/Input"
import { Button } from "shared/ui"
import { schema } from '../helpers/schema'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import {ILogin} from '../types/loginInterface'
import { authActions } from 'widgets/Auth/model/AuthSlice'
// import {setLoggedUser} from 'widgets/Auth/model/AuthThunk'

import './Login.scss'
import { toast } from "react-toastify"
import { useAppDispatch } from "shared/hooks/useRedux"
import { auth } from "shared/config/firebase"
import { useSelector } from "react-redux"
import { RootState } from "app/store/store"

export const Login = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    
    const methods = useForm<ILogin>({
        resolver: yupResolver(schema),
        reValidateMode: 'onChange',
    })

    const {handleSubmit, reset, formState: { errors }} = methods

    const onHandleSubmit: SubmitHandler<ILogin> = async (data) => {
        await signInWithEmailAndPassword(auth, data.email, data.password)
        // navigate('/')

        // auth.onAuthStateChanged((user) => {
        //     if (user) {
        //         console.log(user)
        //         dispatch(authActions.setUser(user))
        //     //   console.log(user)
        //     } else {
        //      console.log('no user online')
        //     }
        //   });
        

            // .then((data:any) => {
            //     console.log(data)
            //     toast.success("Super!")
            //     // dispatch(authActions.login(data?.user?.uid))
            //     navigate('/')
            // })
            // .catch(() =>  toast.error("Error!"))
        // reset()
    }

    return (
        <div className="login">
            <h3 className="login__title">
                Login to your account
            </h3>
            <FormProvider {...methods}>
                <form 
                    onSubmit={handleSubmit(onHandleSubmit)} 
                    name='login' 
                    className="login__form">
                    
                    <Input
                        name='email'
                        type='email'
                        placeholder="Enter your e-mail"
                    />
                    <div className="error__module">{errors.email?.message}</div>

                    <Input
                        name='password'
                        type='password'
                        placeholder="Enter your password"
                    />
                    <div className="error__module">{errors.password?.message}</div>
                    <div className="login__buttons">
                    <Link to='/auth/registration'>
                        <Button content="Create account" type="neon" />
                    </Link>
                    <Button content="Confirm" type="neon" />
                    </div>
                    
                </form>
            </FormProvider>
        </div>
    )
}
