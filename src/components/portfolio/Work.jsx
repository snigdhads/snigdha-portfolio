import React from "react";

const projects = [
  {
    title: "Edu Library — Library Management System",
    period: "Nov 2025 — Dec 2025",
    desc: "Full-stack monolithic library management system with role-based access for Students, Librarians, and Admins. Features registration, authentication, book search, borrow/return workflows, inventory management, and an admin dashboard. Containerized with Docker and deployed on AWS EC2.",
    tags: ["Python", "Flask", "SQLite", "JavaScript", "Docker", "AWS EC2"],
  },
  {
    title: "Crop & Weed Segmentation (U-Net + ResNet-50 + CRF)",
    period: "Jul 2025 — Oct 2025",
    desc: "Multispectral (RGB + NIR) deep learning model using U-Net with a ResNet-50 encoder to segment crops and weeds for precision agriculture. Applied CRF post-processing to refine boundaries and boost accuracy across early- and mid-stage crop datasets.",
    tags: ["PyTorch", "U-Net", "ResNet-50", "CRF", "OpenCV", "NumPy"],
  },
  {
    title: "Online Food Ordering System",
    period: "Mar 2024 — Apr 2024",
    desc: "Web-based food ordering system with a user-friendly interface for browsing menus, customizing orders, and simulating payments. Focused on scalability, responsiveness, and a customer-centric experience.",
    tags: ["HTML", "CSS", "JavaScript", "SQL"],
  },
];

const Work = () => (
  <section className="section container" id="work">
    <div className="section-label">02 / Selected Work</div>
    <h2 className="section-title">Things I've <span className="accent-text">built.</span></h2>
    <div className="work-grid">
      {projects.map((p, i) => (
        <a className="work-card" key={i} href={p.link} target="_blank" rel="noreferrer">
          <div className="work-period">{p.period}</div>
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
          <div className="work-tags">
            {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default Work;