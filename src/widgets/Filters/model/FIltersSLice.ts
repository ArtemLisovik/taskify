import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
    filter: string
}

const initialState: IinitialState = {
    filter: ''
}

const filter = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, action) => {state.filter = action.payload}
    }
})

const {actions, reducer} = filter

export const {setFilter} = actions
export default reducer