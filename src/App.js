import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Tiket from "./Pages/Tiket";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/tiket" element={<Tiket />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
