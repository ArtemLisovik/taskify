import { FormProvider, useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Link } from "react-router-dom"

import Input from "shared/ui/Input/Input"
import { Button } from "shared/ui"
import { schema } from '../helpers/regValidation'
import { IRegistration } from "../types/IRegistration"
import { registrationUser } from '../model/registrationUserThunk'

import 'widgets/Login/ui/Login.scss'


export const Registration = () => {

    const methods = useForm<IRegistration>({
        resolver: yupResolver(schema),
        reValidateMode: 'onChange'
    })
    const { handleSubmit, formState: { errors } } = methods

    const onSubmit: SubmitHandler<IRegistration> = async (data) => {
        registrationUser(data)
    }

    
    return (
        <div className="login">
            <h3 className="login__title">
                Create your account
            </h3>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} name='registration' className="login__form">

                    <Input
                        name='email'
                        type='email'
                        placeholder="Enter your e-mail"
                    />
                    <div className="error__module">{errors.email?.message}</div>

                    <Input
                        name='name'
                        type='text'
                        placeholder="Enter your nickname"
                    />
                    <div className="error__module">{errors.name?.message}</div>

                    <Input
                        name='profession'
                        type='text'
                        placeholder="What is your profession?"
                    />
                    <div className="error__module">{errors.profession?.message}</div>

                    <Input
                        name='password'
                        type='password'
                        placeholder="Enter your password"
                    />
                    <div className="error__module">{errors.password?.message}</div>

                    <div className="login__buttons">
                        <Link to='/auth/login'>
                            <Button content="I have account" type="neon" />
                        </Link>
                        <Button content="Create account" type="neon" />
                    </div>

                </form>
            </FormProvider>

        </div>
    )
}
