import { createAsyncThunk } from "@reduxjs/toolkit";
import { ref, getDownloadURL } from 'firebase/storage'

import { getDoc, doc } from 'firebase/firestore'
// import {setUserUid, setLoadingComplete} from './AuthSlice'
import { database, auth, storage } from "shared/config/firebase";
import {RootState} from 'app/store/store'
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
                const storageRef = ref(storage, `avatars/${user.uid}`)
                const avatarRef = await getDownloadURL(storageRef)
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
    // console.log(profile)

})


// export const getAuth = createAsyncThunk('profile/uid', async (_, {dispatch}) => {
//     auth.onAuthStateChanged(async (user) => {
//         if(user) {
//             dispatch(setUserUid(user.uid))
//             dispatch(getFirestoreData())
//             dispatch(getStorageData())
//             dispatch(setLoadingComplete())
//         } else{
//             dispatch(setUserUid(null))
//             dispatch(setLoadingComplete())
//         }
//     })
// })


// export const getFirestoreData = createAsyncThunk('profile/name,profession', async (_, {dispatch, getState}) => {
//     let data;
    // try {
    //     const userUid = (getState() as RootState).auth.profile.userUid
    //     const firestoreRef = doc(database, 'users', userUid as string)
    //     data = (await getDoc(firestoreRef)).data()
    // }
    // catch(error) {
    //     data = null
    // }
//     return data
// })


// export const getStorageData = createAsyncThunk('profile/avatar', async (_, {getState, dispatch}) => {
//     let data; 
    // try{
    //     const {userUid} = (getState() as RootState).auth.profile
    //     const storageRef = ref(storage, `avatars/${userUid}`)
    //     data = await getDownloadURL(storageRef)
    // }
    // catch(error) {
    //     console.log(error)
    //     data = null
    // }
//     return data
// })

