import { observable, action } from "mobx";

class CommonStore {
  // 当前用户信息
  @observable.ref showHeader = true;

  @action 
  changeHeader(bool){
    console.log(bool)
    this.showHeader = bool
  }
}

export default new CommonStore();
