import React from "react";
import "./QuestionImage.scss";

type TQuestionImage = {
  url?: string;
};

export const QuestionImage: React.FC<TQuestionImage> = ({ url }) => {
  if (!url) {
    return null;
  }

  return (
    <div className={"QuestionImageContainer"}>
      <img className={"QuestionImage"} src={url} alt={url} />
    </div>
  );
};
