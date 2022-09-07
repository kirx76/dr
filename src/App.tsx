import { Provider } from "mobx-react";
import React from "react";
import MainRouter from "src/routes/MainRouter";
import rootStore from "src/stores/rootStore";
import { CookiesProvider } from "react-cookie";
import { Congratulation, MainBar, Question } from "src/components";

const stores = {
  rootStore,
  userStore: rootStore.userStore,
  questionStore: rootStore.questionStore,
};

const App: React.FC = () => {
  return (
    <CookiesProvider>
      <Provider {...stores}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/*<MainBar />*/}
          <MainRouter />
        </div>
        <Question />
        <Congratulation />
      </Provider>
    </CookiesProvider>
  );
};

export default App;
