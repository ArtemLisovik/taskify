import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "features/Task/types/ITask";
import {getUserUid} from './AuthThunk'

type IState = {
    loader: boolean
    profile: Profile
}
type Profile = {
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
        // authUser: (state, action) => {
        //     state.profile = action.payload
        //     state.loader = false
        // },
        authUserUid: (state, action: PayloadAction<string | null>) => {
            state.profile.userUid = action.payload
            state.loader = false
        }
    },
})

export const { reducer: auth, actions: authActions } = authSlice
// export const authUserUid = authSlice.actions
