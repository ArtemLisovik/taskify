import { AppDispatch } from "../../../app/store/store"

<<<<<<< HEAD
import {fetchAllFilters} from './FiltersSlice'
import { useHttp } from "../../../shared/api/useHttp"

export const fetchFilters = () => (dispatch: AppDispatch) => {
    const {request} = useHttp()
    request('http://localhost:3001/filters').then(res => dispatch(fetchAllFilters(res)))
=======
export const fetchFilters = () => (dispatch: AppDispatch) => {
    
>>>>>>> 17e8c0b750e7d653a75d071e3762a1cb823a1dd0
}