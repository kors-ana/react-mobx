import { autorun, observable } from "mobx";

class TodoStore {
  @observable todos = ["buy milk", "get cheese"];
  @observable filter = "";
}

const store = new TodoStore();

export default store;
