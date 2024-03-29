import { createContext, useEffect, useReducer } from "react";
import authReducer from "../reducers/authReducer";
import { loginUser } from "../actionCreators/authActionCreators";

//initialize AuthContext
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  //get user from local storage on app load
  const user = JSON.parse(localStorage.getItem("user")) || null;

  //initial user state
  const initialState = {
    user: user,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    //get user from local storage on app load
    // const user = JSON.parse(localStorage.getItem("user"));
    //dispatc user details if user exist
    if (user) {
      dispatch(loginUser(user));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
