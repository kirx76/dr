import React from "react";
import { MobXProviderContext } from "mobx-react";
import RootStore from "src/stores/rootStore";

export function useStores() {
  return React.useContext(MobXProviderContext) as typeof RootStore;
}
