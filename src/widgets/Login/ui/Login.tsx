import { Link } from "react-router-dom"

import Input from "shared/ui/Input/Input"
import { Button } from "shared/ui"
import { schema } from '../helpers/schema'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import {ILogin} from '../model/loginInterface'

import './Login.scss'

export const Login = () => {
    
    const methods = useForm<ILogin>({
        resolver: yupResolver(schema),
        reValidateMode: 'onChange',
    })

    const {handleSubmit, reset, formState: {errors}} = methods

    const onHandleSubmit: SubmitHandler<ILogin> = (data) => {
        console.log(data)
        reset()
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
