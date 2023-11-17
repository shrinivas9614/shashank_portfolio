import React from "react";
import "./App.css";
import {
  HomePage,
  ServicesPage,
  NavBar,
  AboutPage,
  ContactPage,
  ProjectPage,
} from "./Utilities";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <HomePage />
      <ServicesPage />
      <ProjectPage />
      <AboutPage />
      <ContactPage />
    </div>
  );
}

export default App;
