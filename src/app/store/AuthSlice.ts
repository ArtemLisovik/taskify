import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getFirestoreData, getAuth, getStorageData } from './AuthThunk'

type IState = {
    loader: boolean
    profile: Profile
}
export type Profile = {
    userUid: null | string
    name: null | string
    profession: null | string
    avatar: null | string
}


const initialState: IState = {
    loader: true,
    profile: {
        userUid: null,
        name: null,
        profession: null,
        avatar: null
    }
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserUid: (state, action) => {
            state.profile.userUid = action.payload
        },
        setLoadingComplete: (state) => {
            state.loader = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getFirestoreData.pending, () => { })
            .addCase(getFirestoreData.fulfilled, (state, action) => {
                state.profile = { ...state.profile, ...action.payload }
                state.loader = false
            })
            .addCase(getFirestoreData.rejected, (state) => { 
                state.profile.name = null
                state.profile.profession = null 
                state.loader = false
            })


            .addCase(getStorageData.pending, () => {})
            .addCase(getStorageData.fulfilled, (state, action) => {
                state.profile.avatar = action.payload
            })
            .addCase(getStorageData.rejected, (state) => {state.profile.avatar = null})
    }
})

export const { reducer: auth, actions: authActions } = authSlice
export const {setUserUid, setLoadingComplete} = authActions