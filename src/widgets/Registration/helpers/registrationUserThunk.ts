import {createUserWithEmailAndPassword} from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'
import {toast} from 'react-toastify'
import {ref, uploadBytes} from 'firebase/storage'

import {auth, database} from 'shared/config/firebase'
import {IRegistration} from '../types/IRegistration'
import { storage } from 'shared/config/firebase'

export const registrationUser = async (data: IRegistration) => {
    try {
        const response: any = await createUserWithEmailAndPassword(auth, data.email, data.password)
        console.log(data.avatar)
        
        await setDoc(doc(database, "users", response.user.uid,), {
            name: data.name,
            profession: data.profession,
        })
        toast.success('Success!')
        
        const avatarRef = ref(storage, `avatars/${response.user.uid}/`)
        uploadBytes(avatarRef, data.avatar[0])
    } 
    catch (error) {
        toast.error((error as Error).message)
        console.log(error)
    }
}