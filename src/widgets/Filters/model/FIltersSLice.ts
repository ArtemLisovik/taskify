import { createSlice } from "@reduxjs/toolkit";

export type IinitialState = {
    filters: string[]
    activeFilter: string
}

const initialState: IinitialState = {
    filters: [],
    activeFilter: 'active'
}

const filter = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        fetchAllFilters: (state, action) => {state.filters = action.payload},
        setActiveFilter: (state, action) => {state.activeFilter = action.payload}
    }
})

const {actions, reducer} = filter

export const {fetchAllFilters, setActiveFilter} = actions
export default reducer