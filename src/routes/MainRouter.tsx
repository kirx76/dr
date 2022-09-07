import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthPage, HomePage, MarketPage, UserPage } from "src/navigations";
import { useCookies } from "react-cookie";
import { useStores } from "src/utils";

const MainRouter: React.FC = observer(() => {
  const [cookies] = useCookies(["name"]);
  const { userStore } = useStores();

  useEffect(() => {
    if (cookies.name) {
      userStore.name = cookies.name;
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/market" element={<MarketPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/me" element={<UserPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
});

export default MainRouter;
