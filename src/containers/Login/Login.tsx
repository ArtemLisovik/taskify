import { Link } from "react-router-dom"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'

import { useAppDispatch } from "hooks"
import { auth } from 'config/firebase'
import { setLoading } from 'store'
import { Button, Input } from "ui"
import { schema } from './helpers/schema'
import { ILogin } from './types/loginInterface'

import './Login.scss'


export const Login = () => {
    const dispatch = useAppDispatch()
    const methods = useForm<ILogin>({
        resolver: yupResolver(schema),
        reValidateMode: 'onChange',
    })

    const {handleSubmit, formState: { errors }} = methods

    const onHandleSubmit: SubmitHandler<ILogin> = async (data) => {
        dispatch(setLoading())
        await signInWithEmailAndPassword(auth, data.email, data.password)
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
                        isContext={true}
                        name='email'
                        type='email'
                        placeholder="Enter your e-mail"
                    />
                    <div className="error__module">{errors.email?.message}</div>

                    <Input
                        isContext={true}
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
