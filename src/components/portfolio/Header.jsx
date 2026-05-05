import React from "react";

const Header = () => (
  <header className="header">
    <div className="header-inner">
      <a href="#" className="logo">
        <span className="logo-mark">DS</span>
        <span>Snigdha.</span>
      </a>
      <nav className="nav">
        <a href="#about"><span className="nav-num">01</span> About</a>
        <a href="#work"><span className="nav-num">02</span> Work</a>
        <a href="#experience"><span className="nav-num">03</span> Experience</a>
        <a href="#toolbox"><span className="nav-num">04</span> Toolbox</a>
        <a href="#contact"><span className="nav-num">05</span> Contact</a>
      </nav>
      <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-resume">Resume ↗️</a>
    </div>
  </header>
);

export default Header;