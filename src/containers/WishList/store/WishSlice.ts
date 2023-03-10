import {createSlice} from '@reduxjs/toolkit'

import {fetchWishFilters} from './WishThunk'

type initialStateType = {
    wishList: string[]
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
    }
})

const {reducer, actions} = wishSlice

export const {setWishFilter, setWishSearch} = actions
export default reducer
