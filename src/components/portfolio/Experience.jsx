import React from "react";

const Experience = () => (
  <section className="section container" id="experience">
    <div className="section-label">03 / Experience &amp; Education</div>
    <h2 className="section-title">The path so <span className="accent-text">far.</span></h2>

    <div className="exp-label">▸ Research Internship</div>
    <div className="exp-card">
      <div className="exp-head">
        <div className="exp-title">AI/ML Research Intern <span>· IIITDM Kurnool</span></div>
        <div className="exp-date">📅 May 2025 — Aug 2025</div>
      </div>
      <ul>
        <li>Crop &amp; weed segmentation using multispectral (RGB + NIR) imagery for precision agriculture.</li>
        <li>Implemented U-Net with a ResNet-50 encoder, tuned for early- and mid-stage crop datasets.</li>
        <li>Applied CRF post-processing for sharper boundaries and higher segmentation accuracy.</li>
        <li>Owned data preprocessing, training, evaluation, and research documentation end-to-end.</li>
      </ul>
    </div>

    <div className="exp-label">▸ Education</div>
    <div className="edu-grid">
      <div className="edu-card">
        <div className="edu-year">2023 — 2027</div>
        <h4>B.Tech, Computer Science Engineering</h4>
        <p>JNTUA College of Engineering, Pulivendula</p>
        <span className="edu-badge">CGPA 7.4</span>
      </div>
      <div className="edu-card">
        <div className="edu-year">2021 — 2023</div>
        <h4>Class XII · MPC</h4>
        <p>Narayana Junior College</p>
        <span className="edu-badge">94.2%</span>
      </div>
      <div className="edu-card">
        <div className="edu-year">2020</div>
        <h4>Class X · CBSE</h4>
        <p>Montessori E.M. High School</p>
        <span className="edu-badge">92%</span>
      </div>
    </div>

    <div className="exp-label">▸ Workshops Attended</div>
    <div className="workshop-grid">
      <div className="workshop-card"><h5>AI Tools Workshop</h5><p>Clahan Technologies</p><span className="year">2025</span></div>
      <div className="workshop-card"><h5>Python Programming Workshop</h5><p>JNTUA Pulivendula</p><span className="year">2024</span></div>
      <div className="workshop-card"><h5>Java Programming Workshop</h5><p>JNTUA Pulivendula</p><span className="year">2024</span></div>
      <div className="workshop-card"><h5>C Programming Workshop</h5><p>JNTUA Pulivendula</p><span className="year">2023</span></div>
    </div>
  </section>
);

export default Experience;