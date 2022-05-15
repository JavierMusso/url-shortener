import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import axios from "axios";
import "./reset.css";
import { BrowserRouter as Router } from "react-router-dom";

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Router>
    <App />
  </Router>
);
