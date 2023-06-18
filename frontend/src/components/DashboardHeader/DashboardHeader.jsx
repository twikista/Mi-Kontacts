import React from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import { useAuthContext } from "../../hooks/useAuthContext";
import SearchBox from "../SearchBox/SearchBox";

function DashboardHeader() {
  const { user } = useAuthContext();
  return (
    <header className="header">
      <SearchBox />
      <ThemeToggle />
      <div style={{ borderRadius: "5px" }}>
        <Button variant="outlined">LOGOUT</Button>
      </div>
      <Avatar user={user} />
    </header>
  );
}

export default DashboardHeader;
