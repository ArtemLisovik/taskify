import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
    filters: string[]
    activeFilter: string
}

const initialState: IinitialState = {
    filters: [],
    activeFilter: ''
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