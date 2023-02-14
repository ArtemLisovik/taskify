import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilter, FiltersType } from "../types/IFilter";

interface IinitialState {
  filters: [] | IFilter[];
  loadingStatus: "wait" | "loading" | "error" | "success";
  error: null | string;
  active: FiltersType;
}

const initialState: IinitialState = {
  filters: [],
  loadingStatus: "wait",
  error: null,
  active: "all",
};

const filters = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filtersFetching: (state) => {
      state.loadingStatus = "loading";
    },
    filtersFetchedSuccess: (state, action: PayloadAction<IFilter[]>) => {
      state.loadingStatus = "success";
      state.filters = action.payload;
    },
    filtersFetchedError: (state, action: PayloadAction<string>) => {
      state.loadingStatus = "error";
      state.error = action.payload;
    },
    activeFilter: (state, action: PayloadAction<FiltersType>) => {
      state.active = action.payload;
    },
  },
});

const { actions, reducer } = filters;

export const {
  filtersFetching,
  filtersFetchedSuccess,
  filtersFetchedError,
  activeFilter,
} = actions;

export default reducer;
