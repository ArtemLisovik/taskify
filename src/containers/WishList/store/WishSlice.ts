import {createSlice} from '@reduxjs/toolkit'

import { IWish } from '../types/IWish'
import {fetchWishFilters, createNewWish, fetchAllWishes, deleteWish, updateWish} from './WishThunk'

type initialStateType = {
    wishList: IWish[]
    wishFilters: string[]
    wishActiveFilter: string
    wishSearch: string,
    wishStatus: string
}

const initialState: initialStateType = {
    wishList: [],
    wishFilters: [],
    wishActiveFilter: 'current',
    wishSearch: '',
    wishStatus: 'idle'
}

const wishSlice = createSlice({
    name: 'wishList',
    initialState,
    reducers: {
        setWishFilter: (state, action) => {
            state.wishActiveFilter = action.payload
        },
        setWishSearch: (state, action) => {
            state.wishSearch = action.payload
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
            .addCase(updateWish.fulfilled, (state, action) => {
                console.log(action)
            })
            .addCase(updateWish.rejected, () => {})
    }
})

const {reducer, actions} = wishSlice

export const {setWishFilter, setWishSearch} = actions
export default reducer
