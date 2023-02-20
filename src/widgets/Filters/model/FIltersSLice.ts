import { createSlice } from "@reduxjs/toolkit";
import { IStatus } from "entities/Task/types/ITask";

export type IinitialState = {
    filters: string[]
    activeFilter: IStatus
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