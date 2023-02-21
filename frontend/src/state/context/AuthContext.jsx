import { createContext, useReducer } from "react";
import authReducer from "../reducers/authReducer";

//create AuthContext
export const AuthContext = createContext();

//user initial state
const initialState = { user: null };

const AuthContextProvider = ({ children }) => {
  const [dispatch, state] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
