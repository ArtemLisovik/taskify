import { createSlice } from "@reduxjs/toolkit";
import { IStatus } from "features/Task/types/ITask";

export type IinitialState = {
    modalTriggerCoordinates: Object | null
    filters: string[]
    activeFilter: IStatus
    search: string
}

const initialState: IinitialState = {
    modalTriggerCoordinates: null,
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
        onSearch: (state, action) => {state.search = action.payload},
        setModalTriggerCoordinates: (state, action) => {state.modalTriggerCoordinates = action.payload}

    },
    extraReducers: {
        
    }
})

const {actions, reducer} = filter

export const {fetchAllFilters, setActiveFilter, onSearch, setModalTriggerCoordinates} = actions
export default reducer