import React from "react";

const Hero = () => (
  <section className="hero container">
    <div className="hero-pill">Open to internships &amp; collaborations</div>
    <h1>
      <span className="dim">Computer Science student, building with </span>
      <span className="highlight">AI/ML</span>
      <span className="dim"> and the modern web.</span>
    </h1>
    <p>I'm a B.Tech CSE undergrad who loves shipping clean, useful software — from full-stack web apps to research-grade machine learning models for precision agriculture.</p>
    <div className="hero-cta">
      <a href="#work" className="btn-primary">View selected work →</a>
      <a href="/resume.pdf" download="DS_Snigdha_Resume.pdf" className="btn-secondary">⬇️ Download resume</a>
      <span className="location"><span className="location-dot"></span> Kurnool, India</span>
    </div>

    <div className="stats">
      <div className="stat-card">
        <div className="stat-num">3+</div>
        <div className="stat-label">Projects shipped</div>
      </div>
      <div className="stat-card">
        <div className="stat-num">1</div>
        <div className="stat-label">Research internship</div>
      </div>
      <div className="stat-card">
        <div className="stat-num">4</div>
        <div className="stat-label">Workshops attended</div>
      </div>
      <div className="stat-card">
        <div className="stat-num">7.4</div>
        <div className="stat-label">CGPA · B.Tech CSE</div>
      </div>
    </div>
  </section>
);

export default Hero;