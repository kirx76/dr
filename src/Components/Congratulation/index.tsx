import React from "react";
import "./Congratulation.scss";
import { observer } from "mobx-react";
import { useStores } from "src/utils";

export const Congratulation: React.FC = observer(() => {
  const { questionStore } = useStores();
  if (questionStore.congratulation === undefined) {
    return null;
  }
  return (
    <div className="CongratulationContainer">
      <div
        className="Congratulation"
        style={{
          backgroundColor: questionStore.congratulation ? "green" : "red",
        }}
      >
        {questionStore.congratulation
          ? "Умничка!"
          : "Что-то ме, ничего, повезет в следующий раз"}
      </div>
    </div>
  );
});
