import React from "react";
import "./App.css";
import Header from "./components/portfolio/Header";
import Hero from "./components/portfolio/Hero";
import About from "./components/portfolio/About";
import Work from "./components/portfolio/Work";
import Experience from "./components/portfolio/Experience";
import Toolbox from "./components/portfolio/Toolbox";
import Contact from "./components/portfolio/Contact";
import Footer from "./components/portfolio/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Work />
        <Experience />
        <Toolbox />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;