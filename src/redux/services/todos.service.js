import { BaseService } from "react-common-util";

export default class TodosService extends BaseService {
  BASE_PATH = "wp-json/todo-api/v1";

  async list() {
    return this.requestUtil.request({ path: `${this.BASE_PATH}/todos` });
  }

  async create(todo) {
    return this.requestUtil.request({
      path: `${this.BASE_PATH}/todos`,
      method: "post",
      data: todo,
    });
  }

  async destroy(id) {
    return this.requestUtil.request({
      path: `${this.BASE_PATH}/todos/${id}`,
      method: "delete",
    });
  }

  async update(id, data) {
    return this.requestUtil.request({
      path: `${this.BASE_PATH}/todos/${id}`,
      method: "patch",
      data,
    });
  }
}
