import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Property from "./Property";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/property/" Component={App}></Route>
        <Route path="/property/:id" Component={Property}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
