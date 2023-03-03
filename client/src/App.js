import React, { useState, useEffect, useContext } from "react";
import NavBar from "./components/NavBar";
import { UserContext } from "./context/userContext";

function App() {
  const { user, setUser, auth, setAuth } = useContext(UserContext)

  return (
    <NavBar auth={auth} setAuth={setAuth} />
  );
}

export default App;