import { useState, useLayoutEffect, createContext } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  //set theme based on user system theme preference
  const defaultTheme = matchMedia("(prefers-color-scheme:dark)").matches;
  const initialTheme = () =>
    localStorage.getItem("theme") || defaultTheme ? "dark" : "light";
  const [theme, setTheme] = useState(initialTheme);
  //set theme regardless of user system theme preference settings
  const toggleTheme = () =>
    theme === "dark" ? setTheme("light") : setTheme("dark");

  useLayoutEffect(() => localStorage.setItem("theme", theme), [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
