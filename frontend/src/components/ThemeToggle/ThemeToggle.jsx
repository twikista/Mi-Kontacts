import React from "react";
import { IconContext } from "react-icons";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import "./theme-toggle.scss";

import { useTheme } from "../../hooks/useTheme";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const toggleIcon =
    theme === "dark" ? (
      <MdOutlineLightMode className="theme-toggler__icon" />
    ) : (
      <MdDarkMode className="theme-toggler__icon" />
    );

  return (
    <>
      <button className="theme-toggler" onClick={toggleTheme}>
        {toggleIcon}
      </button>
    </>
  );
}

export default ThemeToggle;
