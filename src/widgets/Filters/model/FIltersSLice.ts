import { createSlice } from "@reduxjs/toolkit";
import { IStatus } from "features/Task/types/ITask";

export type IinitialState = {
    filters: string[]
    activeFilter: IStatus
    search: string
}

const initialState: IinitialState = {
    filters: [],
    activeFilter: 'active',
    search: ''
}

const filter = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        fetchAllFilters: (state, action) => {state.filters = action.payload},
        setActiveFilter: (state, action) => {state.activeFilter = action.payload},
        onSearch: (state, action) => {state.search = action.payload}
    },
    extraReducers: {
        
    }
})

const {actions, reducer} = filter

export const {fetchAllFilters, setActiveFilter, onSearch} = actions
export default reducer