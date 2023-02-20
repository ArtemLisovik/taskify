import { AppDispatch } from "../../../app/store/store"

import {fetchAllFilters} from './FiltersSlice'
import { api } from "shared/api/api"

export const fetchFilters = () => (dispatch: AppDispatch) => {
    api.get('/filters').then(res => dispatch(fetchAllFilters(res.data)))
}