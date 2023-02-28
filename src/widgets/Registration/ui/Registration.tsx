import { FormProvider, useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Link, useNavigate } from "react-router-dom"
import {signOut} from 'firebase/auth'
import { createUserWithEmailAndPassword, onAuthStateChanged, reauthenticateWithCredential } from 'firebase/auth'
import { auth } from "shared/config/firebase"
import { addDoc, collection, getDocs } from "firebase/firestore"
import { toast } from "react-toastify"

import Input from "shared/ui/Input/Input"
import { Button } from "shared/ui"
import { schema } from '../helpers/regValidation'
import { IRegistration } from "../types/IRegistration"

import 'widgets/Login/ui/Login.scss'
import { authActions } from "widgets/Auth/model/AuthSlice"
import { connectToCollection } from "shared/helpers/connectToCollection"
import { useAppDispatch } from "shared/hooks/useRedux"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "app/store/store"

export const Registration = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const methods = useForm<IRegistration>({
        resolver: yupResolver(schema),
        reValidateMode: 'onChange'
    })
    const { handleSubmit, formState: { errors } } = methods

    const onSubmit: SubmitHandler<IRegistration> = async (data) => {
        try {
            const response: any = await createUserWithEmailAndPassword(auth, data.email, data.password)
            // const user = response.user
            // setLoggedUser()
            // console.log(user.currentUser)
            // // dispatch(authActions.login(response.user))
            // // console.log(response)
            // // await addDoc(connectToCollection('users'), { 
            // //     name: data.name, 
            // //     profession: data.profession, 
            // //     id: response.user.uid 
            // // })
            toast.success('Success!')
            navigate('/')
        } catch (error) {
            toast.error((error as Error).message)
        }
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

function promptForCredentials() {
    throw new Error("Function not implemented.")
}
