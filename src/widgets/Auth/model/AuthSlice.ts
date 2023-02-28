import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import {auth} from 'shared/config/firebase'

type Profile = {
    id?: string
    name: string
    profession: string
    tasks: []
}

type IState = {
    isAuth: null | string
    loader: boolean
    profile: null | Profile

}

const initialState: IState = {
    loader: true,
    isAuth: null,
    profile: null
    
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action) {
            state.isAuth = action.payload
            state.loader = false

        }
    }
})

export const { reducer: auth, actions: authActions } = authSlice
