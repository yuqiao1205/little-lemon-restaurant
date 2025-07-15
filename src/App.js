import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Menu from "./components/Menu";
import AboutPage from "./pages/About";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Nav />
      <Main />
      <Menu />
      <AboutPage />
      <Footer />
    </Router>
  );
}

export default App;
