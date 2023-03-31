import { useContext } from "react";
import { ThemeContext } from "../state/context/ThemeContext";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw Error("context can't be use outside AuthContxtprovider");
  }
  return context;
};
