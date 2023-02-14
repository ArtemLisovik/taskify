export type FiltersType = "all" | "active" | "completed" | "failed";

export interface IFilter {
  id: number;
  filter: FiltersType;
}
