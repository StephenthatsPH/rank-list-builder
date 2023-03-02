// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  return (
    <Router>
        <Routes>
          <Route path="/testing">
          </Route>
        </Routes>
    </Router>
  );
}

export default App;