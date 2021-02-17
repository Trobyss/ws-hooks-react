import { createContext, useContext } from "react";
import { store } from "../store";

export const StoreContext = createContext(store);

export const StoreProvider: React.FC = (props) => (
  <StoreContext.Provider value={store}>{props.children}</StoreContext.Provider>
);

export const useStoreContext = () => useContext(StoreContext);
