import { RequestUtilService } from "react-common-util";
import TodosService from "./redux/services/todos.service";

const baseRequestUtil = new RequestUtilService({
  baseUrl: "/api",
});

export const serviceRegistry = {
  todos: new TodosService({ RequestUtil: baseRequestUtil }),
};
