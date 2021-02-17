import { observable, action } from "mobx";

class Store {
  @observable secondsPassed = 0;

  @action increase() {
    this.secondsPassed += 1;
  }

  @action decrease() {
    this.secondsPassed += 1;
  }

  @action reset() {
    this.secondsPassed = 0;
  }
}

export const store = new Store();
