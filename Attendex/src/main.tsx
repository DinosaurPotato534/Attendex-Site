import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";



import MainSection from "./components/sections/MainSection";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainSection />
  </React.StrictMode>
);
