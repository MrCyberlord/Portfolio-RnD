import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <main>
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
