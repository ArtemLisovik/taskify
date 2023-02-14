import { ITask } from "../../../entities/ui/Task/types/ITask";
import { FiltersType } from "../../Filters/types/IFilter";

export const filterStatus = (filters: FiltersType, data: ITask[]) => {
  switch (filters) {
    case "all":
      return data;
    case "active":
      return data.filter((item) => item.status === filters);
    case "completed":
      return data.filter((item) => item.status === filters);
    case "failed":
      return data.filter((item) => item.status === filters);
  }
};
