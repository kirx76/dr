import { makeAutoObservable } from "mobx";
import Cookie from "mobx-cookie";
import RootStore from "./rootStore";
import MobxCookie from "mobx-cookie";

class UserStore {
  private _name: string;
  private _score: number;
  private cookieScore: MobxCookie;

  constructor(public rootStore: typeof RootStore) {
    this._name = "";
    this._score = 0;
    this.cookieScore = new Cookie("score");
    makeAutoObservable(this);
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    this._score = value;
  }

  upScore = (value: number) => {
    this._score += value;
    this.cookieScore.set(this.score.toString());
  };
}

export default UserStore;
