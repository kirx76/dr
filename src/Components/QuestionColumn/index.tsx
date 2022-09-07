import React from "react";
import "./QuestionColumn.scss";
import QuestionItem from "src/components/QuestionItem";
import { TQ } from "src/stores/questionStore";
import { observer } from "mobx-react";
import { useStores } from "src/utils";
import { QuestionsData } from "src/datas";

type TQuestionColumn = { data: typeof QuestionsData[0] };

const QuestionColumn: React.FC<TQuestionColumn> = observer(({ data }) => {
  const { questionStore } = useStores();

  const onClick = (question: TQ) => {
    if (!question.answered) {
      questionStore.currentQuestion = question;
    }
  };

  return (
    <div className="QuestionColumnContainer" style={{ flex: 1 }}>
      <div className="QuestionColumnContainer_Header">
        <QuestionItem text={data.name} />
      </div>
      <div className="QuestionColumnContainer_Column">
        {data.questions.map((question) => (
          <QuestionItem
            key={question.id}
            text={`${question.text}₽`}
            onClick={() => onClick(question)}
            answered={question.answered}
          />
        ))}
      </div>
    </div>
  );
});

export default QuestionColumn;
