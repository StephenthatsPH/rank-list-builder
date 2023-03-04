import React, { useContext } from "react";
import NavBar from "./components/NavBar";
import { UserContext } from "./context/userContext";

function App() {
  const { auth, users, handleLogout } = useContext(UserContext)

  return (
    <NavBar auth={auth} user={users} handleLogout={handleLogout}/>
  );
}

export default App;