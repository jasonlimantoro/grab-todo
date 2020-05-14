import { RequestUtilService } from "react-common-util";
import TodosService from "./redux/services/todos.service";
import env from "./env";

const baseRequestUtil = new RequestUtilService({
  baseUrl: process.env.NODE_ENV === "development" ? "/api" : env.BACKEND_HOST,
});

export const serviceRegistry = {
  todos: new TodosService({ RequestUtil: baseRequestUtil }),
};
