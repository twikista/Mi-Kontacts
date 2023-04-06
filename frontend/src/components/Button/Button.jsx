import React from "react";
import "./button.scss";

function Button({ children, variant, color }) {
  const variantClass = (variant) => {
    let currentClass;
    switch (variant) {
      case "basic":
        currentClass = "button--basic";
        break;
      case "outlined":
        currentClass = "button--outlined";
        break;
    }
    return currentClass;
  };
  return (
    <button
      style={{ color: color || null }}
      className={`button ${variantClass(variant)}`}
    >
      {children}
    </button>
  );
}

export default Button;
