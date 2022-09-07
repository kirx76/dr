import React, { useState } from "react";
import "./QuestionAnswers.scss";
import { observer } from "mobx-react";
import { useStores } from "src/utils";
import { QuestionImage } from "src/components";

type TAnswer = {
  text: string;
  value: boolean;
};

type TQuestionAnswers = {
  answers: TAnswer[];
};

type TQuestionAnswer = {
  answer: TAnswer;
  onSelect: (v: TAnswer) => void;
};

const QuestionAnswer: React.FC<TQuestionAnswer> = ({ answer, onSelect }) => {
  const onClick = () => {
    onSelect(answer);
  };

  return (
    <div className={"QuestionAnswer"} onClick={onClick}>
      {answer.text}
    </div>
  );
};

export const QuestionAnswers: React.FC<TQuestionAnswers> = observer(
  ({ answers }) => {
    const { questionStore, userStore } = useStores();
    const [selectedAnswer, setSelectedAnswer] = useState<TAnswer | undefined>(
      undefined
    );
    const [showAnswer, setShowAnswer] = useState(false);

    const onSelect = (answer: TAnswer) => {
      setSelectedAnswer(answer);
    };

    const disagree = () => {
      setSelectedAnswer(undefined);
    };

    // const disappear = () => {
    //   setSelectedAnswer(undefined);
    //   questionStore.currentQuestion = undefined;
    // };

    const agree = () => {
      if (selectedAnswer?.value) {
        userStore.upScore(questionStore.currentQuestion?.text || 0);
        questionStore.congratulation = true;
      } else {
        questionStore.congratulation = false;
      }
      questionStore.answerQuestion(questionStore.currentQuestion?.id);
      setShowAnswer(true);
    };

    if (showAnswer) {
      return null;
    }

    if (selectedAnswer) {
      return (
        <div>
          <div style={{ marginBottom: 16 }}>Точно?</div>
          <div className={"AgreedContainer"}>
            <div className={"Agreed"} onClick={agree}>
              Да
            </div>
            <div className={"Agreed"} onClick={disagree}>
              Нет
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className={"QuestionAnswersContainer"}>
        {answers.map((answer) => (
          <QuestionAnswer
            onSelect={onSelect}
            answer={answer}
            key={answer.text}
          />
        ))}
      </div>
    );
  }
);
