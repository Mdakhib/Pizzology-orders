import { useContext, createContext, useReducer } from "react";
import { reducer } from "../reducer/reducer";

const AppContext = createContext();

let initialState = {
  bucket: [],
  total: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
