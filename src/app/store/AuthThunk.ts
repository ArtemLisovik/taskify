import { createAsyncThunk } from "@reduxjs/toolkit";
import { ref, getDownloadURL } from 'firebase/storage'

import { getDoc, doc } from 'firebase/firestore'
import { database, auth, storage } from "shared/config/firebase";
import { Profile, setUserProfile } from './AuthSlice'

export const getUserProfile = createAsyncThunk('userUID', (_, { dispatch }) => {
    auth.onAuthStateChanged(async (user) => {
        if (user) {
            try {
                const loggedUser = (await getDoc(doc(database, "users", user.uid))).data();

                const avatarRef = ref(storage, `avatars/${user.uid}`)
                const avatarURL = await getDownloadURL(avatarRef)

                const profile: Profile = { name: loggedUser?.name, profession: loggedUser?.profession, userUid: user.uid as string, avatar: avatarURL as string }
                dispatch(setUserProfile(profile))
            }
            catch (error) {
                console.log(error)
                // window.location.reload()
            }
        } else {
            dispatch(setUserProfile(null))
        }
    });
})