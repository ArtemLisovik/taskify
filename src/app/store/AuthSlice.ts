import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IState = {
    loader: boolean
    profile: null | Profile
}
export type Profile = {
    userUid: null | string
    name: null | string
    profession: null | string
    avatar: null | string
}


const initialState: IState = {
    loader: true,
    profile: null
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserProfile: (state, action: PayloadAction<Profile | null>) => {
            state.profile = action.payload
            state.loader = false
        }
    },
})

export const { reducer: auth, actions: authActions } = authSlice
export const {setUserProfile} = authActions
