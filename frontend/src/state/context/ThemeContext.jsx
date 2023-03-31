import { useState, useLayoutEffect, createContext } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const defaultTheme = matchMedia("(prefers-color-scheme:dark)").matches;
  const initialTheme = () =>
    localStorage.getItem("theme") || defaultTheme ? "dark" : "light";
  const [theme, setTheme] = useState(initialTheme);
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
