import {createUserWithEmailAndPassword} from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'
import {toast} from 'react-toastify'

import {auth, database} from 'shared/config/firebase'
import {IRegistration} from '../types/IRegistration'

export const registrationUser = async (data: IRegistration) => {
    try {
        const response: any = await createUserWithEmailAndPassword(auth, data.email, data.password)
        console.log(response)
        
        await setDoc(doc(database, "users", response.user.uid,), {
            name: data.name,
            profession: data.profession,
        })
        toast.success('Success!')
    } 
    catch (error) {
        toast.error((error as Error).message)
        console.log(error)
    }
}