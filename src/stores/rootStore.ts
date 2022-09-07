import UserStore from "src/stores/userStore";
import { makeAutoObservable } from "mobx";
import QuestionStore from "src/stores/questionStore";

class RootStore {
  userStore: UserStore;
  questionStore: QuestionStore;

  constructor() {
    makeAutoObservable(this);
    this.userStore = new UserStore(this);
    this.questionStore = new QuestionStore(this);
  }
}

export default new RootStore();
