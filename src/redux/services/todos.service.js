import { BaseService } from "react-common-util";

export default class TodosService extends BaseService {
  async list() {
    return this.requestUtil.request({ path: "todos" });
  }

  async create(todo) {
    return this.requestUtil.request({
      path: "todos",
      method: "post",
      data: todo,
    });
  }

  async destroy(id) {
    return this.requestUtil.request({
      path: `todos/${id}`,
      method: "delete",
    });
  }
}
