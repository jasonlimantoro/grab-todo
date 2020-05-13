import { BaseService } from "react-common-util";

export default class TodosService extends BaseService {
  async list() {
    return this.requestUtil.request({ path: "todos" });
  }
}
