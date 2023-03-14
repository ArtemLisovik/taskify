import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import { IWish } from '../types/IWish'
import {fetchWishFilters, createNewWish, fetchAllWishes, deleteWish, updateWish} from './WishThunk'

export type initialStateType = {
    wishList: IWish[]
    wishFilters: string[]
    wishSearch: string,
    wishStatus: string
    wishMode: string
    wishFilterStatus: string
}

const initialState: initialStateType = {
    wishList: [],
    wishFilters: [],
    wishSearch: '',
    wishStatus: 'idle',
    wishMode: '',
    wishFilterStatus: 'current'
}

const wishSlice = createSlice({
    name: 'wishList',
    initialState,
    reducers: {
        setWishSearch: (state, action) => {
            state.wishSearch = action.payload
        },
        setWishMode: (state, action) => {
            state.wishMode = action.payload
        },
        setWishFilterStatus: (state, action) => {
            state.wishFilterStatus = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWishFilters.pending, (state) => {state.wishStatus = 'loading'})
            .addCase(fetchWishFilters.fulfilled, (state, action) => {
                state.wishStatus = 'idle'
                state.wishFilters = action.payload
            })
            .addCase(fetchWishFilters.rejected, (state) => {state.wishStatus = 'error'})


            .addCase(createNewWish.pending, (state) => {state.wishStatus = 'loading'})
            .addCase(createNewWish.fulfilled, (state, action) => {
                state.wishStatus = 'idle'
                state.wishList = [...state.wishList, action.payload]
        })
            .addCase(createNewWish.rejected, (state) => {state.wishStatus = 'error'})


            .addCase(fetchAllWishes.pending, (state) => {state.wishStatus = 'loading'})
            .addCase(fetchAllWishes.fulfilled, (state, action) => {
                state.wishStatus = 'idle'
                state.wishList = action.payload
            })
            .addCase(fetchAllWishes.rejected, (state) => {state.wishStatus = 'error'})


            .addCase(deleteWish.pending, () => {})
            .addCase(deleteWish.fulfilled, (state, action) => {
                state.wishList = state.wishList.filter(wish => wish.id !== action.payload)
            })
            .addCase(deleteWish.rejected, () => {})


            .addCase(updateWish.pending, () => {})
            .addCase(updateWish.fulfilled, (state, action:any)  => {
                state.wishList = state.wishList.map(wish => wish.id === (action.payload as IWish).id ? action.payload : wish
                )
            })
            .addCase(updateWish.rejected, () => {})
    }
})

const {reducer, actions} = wishSlice

export const {setWishSearch, setWishMode, setWishFilterStatus} = actions
export default reducer
