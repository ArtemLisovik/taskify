import { AppDispatch } from "../../../app/store/store"

import {fetchAllFilters} from './FiltersSlice'
import { api } from "shared/api/api"
// import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchFilters = () => (dispatch: AppDispatch) => {
    api.get('/filters').then(res => dispatch(fetchAllFilters(res.data)))
}

// export const fetchFilters = createAsyncThunk('filters', async (_, {getState, rejectWithValue}) => {

// })