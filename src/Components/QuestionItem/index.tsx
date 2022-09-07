import React from "react";
import "./QuestionItem.scss";

type TQuestionItemProps = {
  text: string;
  size?: string;
  onClick?: () => void;
  answered?: boolean;
};

const QuestionItem: React.FC<TQuestionItemProps> = ({
  text,
  size,
  onClick,
  answered,
}) => {
  return (
    <div
      onClick={onClick}
      className="QuestionItem"
      data-clickable={typeof onClick === "function" && !answered}
      data-answered={answered}
    >
      {text}
    </div>
  );
};

export default QuestionItem;
