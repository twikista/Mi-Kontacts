import { useContext } from "react";
// import { AuthContext } from "../state/context/AuthContext";
import { AuthContext } from "../state/context/AuthContext";

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error("context can't be use outside AuthContxtprovider");
  }
  return context;
};
