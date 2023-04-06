import React from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import { useAuthContext } from "../../hooks/useAuthContext";

function DashboardHeader() {
  const { user } = useAuthContext();
  return (
    <header className="header">
      <ThemeToggle />
      <div style={{ borderRadius: "5px" }}>
        <Button variant="outlined">LOGOUT</Button>
      </div>
      <Avatar user={user} />
    </header>
  );
}

export default DashboardHeader;
