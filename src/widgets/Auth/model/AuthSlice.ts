import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import {auth} from 'shared/config/firebase'
// type User = {
//     id: string
//     name: string
//     profession: string
// }

type IState = {
    token: null | string
    user: any
}

const initialState: IState = {
    token: localStorage.getItem('token') || null,
    user: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state: IState, action: PayloadAction<string>) {
            state.token = action.payload
            localStorage.setItem('token', action.payload)
        },
        logout(state) {
            state.token = null
            localStorage.removeItem('token')
        },
        setUser(state, action) {
            state.user = action.payload
        }
    }
})

export const { reducer: auth, actions: authActions } = authSlice
