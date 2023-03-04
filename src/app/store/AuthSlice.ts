import { createSlice } from "@reduxjs/toolkit";
import { ITask } from "features/Task/types/ITask";

type IState = {
    loader: boolean
    userUid: null | string
    profile: null | Profile
}
type Profile = {
    name: string
    profession: string
}


const initialState: IState = {
    loader: true,
    userUid: null,
    profile: null
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authUser: (state, action) => {
            state.profile = action.payload
            state.loader = false
        },
        authUserUid: (state, action) => {
            state.userUid = action.payload
        }
    }
})

export const { reducer: auth, actions: authActions } = authSlice
