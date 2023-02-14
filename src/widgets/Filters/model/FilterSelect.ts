import { RootState } from "../../../app/store/store";

export const selectFilters = (state: RootState) => state.filters.filters;
export const selectActiveFilter = (state: RootState) => state.filters.active;
