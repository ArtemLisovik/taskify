import { createAsyncThunk } from "@reduxjs/toolkit";
import { ref, getDownloadURL } from 'firebase/storage'

import { getDoc, doc } from 'firebase/firestore'
import { database, auth, storage } from "config/firebase";
import { Profile, getUser } from "./AuthSlice";


export const getAuth = createAsyncThunk('profile/', (_, {dispatch}) => {
    let profile: Profile = {
        userUid: null,
        name: null,
        profession: null,
        avatar: null
    }

    auth.onAuthStateChanged(async (user) => {
        if(user) {
            //Get user uid
            try {
                profile = {...profile, userUid: user.uid}
            } catch (error) {
                console.log(error)
                profile = {...profile, userUid: null}
            }

            //Get profile information
            try {
                const firestoreRef = doc(database, 'users', user.uid as string)
                const info = (await getDoc(firestoreRef)).data()
                profile = {...profile, name: info?.name, profession: info?.profession}
            }
            catch(error) {
                console.log(error)
                profile = {...profile, name: null, profession: null}
            }

            //Get avatar
            try{
                const avatarRef = await dispatch(getFile(['avatars', user.uid]))
                // const storageRef = ref(storage, `avatars/${user.uid}`)
                // const avatarRef = await getDownloadURL(storageRef)
                profile = {...profile, avatar: avatarRef}
            }
            catch(error) {
                console.log(error)
                profile = {...profile, avatar: null}
            }
        } else{
            profile = {
                userUid: null,
                name: null,
                profession: null,
                avatar: null
            }
        }
        dispatch(getUser(profile))
    })
})

type getFileProps = [
    path: string,
    name: string
]
export const getFile = createAsyncThunk('getFile', async ([path, name]: getFileProps) => {
    const storageRef = ref(storage, `${path}/${name}`)
    const fileURL = await getDownloadURL(storageRef)
    return fileURL
})