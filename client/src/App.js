import React, { useState, useEffect, useContext } from "react";
import NavBar from "./components/NavBar";
import { UserContext } from "./context/userContext";

function App() {
  const { auth, user, handleLogout } = useContext(UserContext)

  return (
    <NavBar auth={auth} user={user} handleLogout={handleLogout}/>
  );
}

export default App;