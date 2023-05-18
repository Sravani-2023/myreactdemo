import React, { useContext } from "react";
import Dashboard from "./Dashboard";
import Login from "./Login";
import AuthContext from "../context/AuthContext";

const Navigation = () => {
  const ctx = useContext(AuthContext);

  return (
    <div>
      {ctx.isLoggedIn && <Dashboard />}
      {!ctx.isLoggedIn && <Login />}
    </div>
  );
};

export default Navigation;
