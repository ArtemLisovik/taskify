import { createAsyncThunk } from "@reduxjs/toolkit";
import { ref, getDownloadURL } from 'firebase/storage'

import { getDoc, doc } from 'firebase/firestore'
import {setUserUid, setLoadingComplete} from './AuthSlice'
import { database, auth, storage } from "shared/config/firebase";
import {RootState} from 'app/store/store'



export const getAuth = createAsyncThunk('profile/uid', async (_, {dispatch}) => {
    auth.onAuthStateChanged(async (user) => {
        if(user) {
            dispatch(setUserUid(user.uid))
            dispatch(getFirestoreData())
            dispatch(getStorageData())
        } else{
            dispatch(setUserUid(null))

        }
    })
})


export const getFirestoreData = createAsyncThunk('profile/name,profession', async (_, {dispatch, getState}) => {
    let data;
    try {
        const userUid = (getState() as RootState).auth.profile.userUid
        const firestoreRef = doc(database, 'users', userUid as string)
        data = (await getDoc(firestoreRef)).data()
    }
    catch(error) {
        console.log(error)
        data = null
    }
    return data
})


export const getStorageData = createAsyncThunk('profile/avatar', async (_, {getState, dispatch}) => {
    let data; 
    try{
        const {userUid} = (getState() as RootState).auth.profile
        const storageRef = ref(storage, `avatars/${userUid}`)
        data = await getDownloadURL(storageRef)
    }
    catch(error) {
        console.log(error)
        data = null
    }
    return data
})