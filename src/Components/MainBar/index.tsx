import React from "react";
import { observer } from "mobx-react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useStores } from "src/utils";
import { useNavigate } from "react-router-dom";

export const MainBar: React.FC = observer(() => {
  const { userStore } = useStores();
  const navigate = useNavigate();

  const toMarket = () => {
    navigate("/market");
  };

  return (
    <AppBar component="nav" sx={{ position: "relative" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          Jeopardy!
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {userStore.score > 0 && (
            <Button sx={{ color: "#fff" }}>{userStore.score}₽</Button>
          )}
          {userStore.name.length > 0 && (
            <Button sx={{ color: "#fff" }}>{userStore.name}</Button>
          )}
          {userStore.name.length > 0 && (
            <Button sx={{ color: "#fff" }} onClick={toMarket}>
              Магазин
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
});
