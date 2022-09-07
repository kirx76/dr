import React from "react";
import { Box, Modal, Typography } from "@mui/material";
import { observer } from "mobx-react";
import { useStores } from "src/utils";
import { QuestionAnswers, QuestionImage } from "src/components";

export const Question: React.FC = observer(() => {
  const { questionStore } = useStores();
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  if (!questionStore.currentQuestion) {
    return null;
  }

  const onClose = () => {
    questionStore.currentQuestion = undefined;
  };

  return (
    <Modal
      open={true}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {questionStore.currentQuestion.question}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <QuestionImage
            url={
              questionStore.currentQuestion.answered
                ? questionStore.currentQuestion.answer_image
                : questionStore.currentQuestion.image
            }
          />
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <QuestionAnswers answers={questionStore.currentQuestion.answers} />
        </Typography>
      </Box>
    </Modal>
  );
});
