import { useContext, createContext, useReducer } from "react";
import reducer from "../reducer/reducer";

const AppContext = createContext();

let initialState = {
  basket: [],
  total: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const total = state.basket.reduce((acc, crr) => {
    return (acc += crr.price);
  }, 0);
  state.total = total;


  return (
    <AppContext.Provider value={{ dispatch, state }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
