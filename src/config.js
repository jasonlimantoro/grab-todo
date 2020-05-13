import { RequestUtilService } from "react-common-util";
import TodosService from "./redux/services/todos.service";

export const config = {
  BACKEND_HOST:
    process.env.BACKEND_HOST ||
    "http://localhost:8888/grab-todo/wp-json/grab-todo/v1",
};

const baseRequestUtil = new RequestUtilService({
  baseUrl: config.BACKEND_HOST,
});

export const serviceRegistry = {
  todos: new TodosService({ RequestUtil: baseRequestUtil }),
};
