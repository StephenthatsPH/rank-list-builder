import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [user, setUser] = useState(true)

  return (
    <NavBar currentUser={user} />
  );
}

export default App;