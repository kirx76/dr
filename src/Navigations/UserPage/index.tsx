import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { observer } from "mobx-react";
import { useStores } from "src/utils";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { MainBar } from "src/components";

export const UserPage: React.FC = observer(() => {
  const [cookies, setCookie] = useCookies(["name"]);

  const { userStore } = useStores();
  const navigate = useNavigate();

  useEffect(() => {
    if (!cookies.name) {
      navigate("/auth");
    }
  }, []);

  const onClick = () => {
    userStore.score = userStore.score + 1;
  };

  return (
    <div>
      <MainBar />

      <Button variant="outlined" onClick={onClick}>
        EBAT
      </Button>
    </div>
  );
});
