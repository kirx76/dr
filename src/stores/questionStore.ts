import { QuestionsData } from "src/datas";
import RootStore from "./rootStore";
import { makeAutoObservable, reaction } from "mobx";

export type TQ = typeof QuestionsData[0]["questions"][0];

class QuestionStore {
  private _currentQuestion: TQ | undefined = undefined;
  public questions = QuestionsData;
  private _congratulation: false | true | undefined;

  constructor(public rootStore: typeof RootStore) {
    makeAutoObservable(this);
    reaction(
      () => this._congratulation,
      (congratulation) => {
        if (congratulation !== undefined) {
          setTimeout(() => {
            this.hide();
          }, 2900);
        }
      }
    );
  }

  hide = () => {
    this._congratulation = undefined;
  };

  get currentQuestion(): TQ | undefined {
    return this._currentQuestion;
  }

  set currentQuestion(value: TQ | undefined) {
    this._currentQuestion = value;
  }

  get congratulation(): boolean | undefined {
    return this._congratulation;
  }

  set congratulation(value: boolean | undefined) {
    this._congratulation = value;
  }

  setQuestions = (q: any) => {
    this.questions = q;
  };

  answerQuestion = (question_id?: number) => {
    if (question_id) {
      this.questions.map((columns) => {
        columns.questions.map((question) => {
          if (question.id === question_id) {
            question.answered = true;
          }
        });
      });
    }
  };
}

export default QuestionStore;
