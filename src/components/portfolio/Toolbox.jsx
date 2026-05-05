import React from "react";

const tools = [
  { icon: "</>", title: "Programming", chips: ["Python", "C", "Java (basic)", "SQL"] },
  { icon: "🌐", title: "Web", chips: ["HTML", "CSS", "JavaScript", "Flask"] },
  { icon: "🧠", title: "AI / ML", chips: ["PyTorch", "U-Net", "ResNet-50", "CRF", "NumPy", "OpenCV"] },
  { icon: "🔧", title: "Design & Tools", chips: ["Figma", "UI/UX", "Git", "Docker", "AWS EC2", "VS Code"] },
  { icon: "✦", title: "Strengths", chips: ["Problem solving", "Communication", "Leadership", "Teamwork"] },
  { icon: "文", title: "Languages", chips: ["Telugu (native)", "Hindi (fluent)", "English (expert)"] },
];

const Toolbox = () => (
  <section className="section container" id="toolbox">
    <div className="section-label">04 / Toolbox</div>
    <h2 className="section-title">Tools I reach for <span className="accent-text">often.</span></h2>
    <div className="toolbox-grid">
      {tools.map((t, i) => (
        <div className="tool-card" key={i}>
          <div className="tool-head">
            <div className="tool-icon">{t.icon}</div>
            <div className="tool-title">{t.title}</div>
          </div>
          <div className="chips">
            {t.chips.map(c => <span className="chip" key={c}>{c}</span>)}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Toolbox;