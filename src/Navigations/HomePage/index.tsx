import { Container } from "@mui/material";
import React, { useEffect } from "react";
import QuestionColumn from "src/components/QuestionColumn";
import "./HomePage.scss";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import { useCookies } from "react-cookie";
import { useStores } from "src/utils";
import { MainBar } from "src/components";

export const HomePage: React.FC = observer(() => {
  const { questionStore } = useStores();
  const [cookies] = useCookies(["name"]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cookies.name) {
      navigate("/auth");
    }
  }, []);
  return (
    <>
      <MainBar />

      <Container maxWidth="xl" style={{ background: "#4e4e50" }}>
        <div className="HomePageContainer">
          {questionStore.questions.map((category) => (
            <QuestionColumn key={category.id} data={category} />
          ))}
        </div>
      </Container>
    </>
  );
});
