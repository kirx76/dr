import React, { useRef, useState } from "react";
import { Button, Container, Input } from "@mui/material";
import "./AuthPage.scss";
import { ariaLabel } from "src/datas";
import { observer } from "mobx-react";
import { useStores } from "src/utils";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { MainBar } from "src/components";

export const AuthPage: React.FC = observer(() => {
  const { userStore } = useStores();
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["name"]);

  const onClick = () => {
    userStore.name = name;
    setCookie("name", userStore.name);
    navigate("/");
  };

  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setName(e.target.value);
  };

  return (
    <>
      <MainBar />

      <Container maxWidth="sm">
        <div className="AuthPageContainer">
          <Input
            placeholder="Введи свое имя"
            inputProps={ariaLabel}
            style={{ marginBottom: 16 }}
            onChange={onChange}
          />
          <Button variant="contained" onClick={onClick}>
            Войти
          </Button>
        </div>
      </Container>
    </>
  );
});
