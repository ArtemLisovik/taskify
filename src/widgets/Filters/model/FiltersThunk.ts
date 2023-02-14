import { AppDispatch } from "../../../app/store/store";
import { useHttp } from "../../../shared/api/useHttp";
import { IFilter } from "../types/IFilter";

import {
  filtersFetching,
  filtersFetchedSuccess,
  filtersFetchedError,
} from "./FIltersSlice";

export const fetchAllFilters = () => async (dispatch: AppDispatch) => {
  const { request } = useHttp();
  try {
    dispatch(filtersFetching());
    const response: IFilter[] = await request("http://localhost:3001/filters");
    dispatch(filtersFetchedSuccess(response));
  } catch (e) {
    const error = e as Error;
    dispatch(filtersFetchedError(error.message));
  }
};
