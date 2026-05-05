import React from "react";

const links = [
  { label: "Email",    value: "snigdhads.007@gmail.com",          href: "mailto:snigdhads.007@gmail.com",                       icon: "✉️" },
  { label: "Phone",    value: "+91 80741 56127",                  href: "tel:+918074156127",                                    icon: "☎️" },
  { label: "LinkedIn", value: "linkedin.com/in/snigdha-ds",        href: "https://www.linkedin.com/in/snigdha-ds-08977430b",     icon: "in" },
  { label: "GitHub",   value: "github.com/snigdhads",              href: "https://github.com/snigdhads",                         icon: "{ }" },
];

const Contact = () => (
  <section className="section container" id="contact">
    <div className="section-label">05 / Get in touch</div>
    <h2 className="section-title">Let's build <span className="accent-text">something</span> together.</h2>
    <div className="contact-grid">
      <p>I'm currently open to internships, research collaborations, and freelance work. The fastest way to reach me is email — I usually reply within a day.</p>
      <div className="contact-list">
        {links.map(l => (
          <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="contact-card">
            <div className="contact-icon">{l.icon}</div>
            <div>
              <div className="contact-info-label">{l.label}</div>
              <div className="contact-info-value">{l.value}</div>
            </div>
            <div className="contact-arrow">↗️</div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;