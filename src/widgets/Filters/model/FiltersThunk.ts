import { AppDispatch } from "../../../app/store/store"

import {fetchAllFilters} from './FiltersSlice'
import { useHttp } from "../../../shared/api/useHttp"

export const fetchFilters = () => (dispatch: AppDispatch) => {
    const {request} = useHttp()
    request('http://localhost:3001/filters').then(res => dispatch(fetchAllFilters(res)))
}