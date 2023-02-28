import { createSlice } from "@reduxjs/toolkit";
import { ITask } from "entities/Task/types/ITask";

type IState = {
    loader: boolean
    userUid: null | string
    profile: null | Profile
    tasks: null | ITask[]
}
type Profile = {
    name: string
    profession: string
}


const initialState: IState = {
    loader: true,
    userUid: null,
    profile: null,
    tasks: null
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action) {
            state.profile = action.payload
            state.loader = false
        }
    }
})

export const { reducer: auth, actions: authActions } = authSlice
