export const profile = {
  name: "D S Snigdha",
  shortName: "Snigdha",
  initials: "DS",
  role: "Computer Science student",
  tagline: "building with AI/ML and the modern web.",
  blurb:
    "I'm a B.Tech CSE undergrad who loves shipping clean, useful software — from full-stack web apps to research-grade machine learning models for precision agriculture.",
  location: "Kurnool, India",
  status: "Open to internships & collaborations",
  email: "snigdhads.007@gmail.com",
  phone: "+91 80741 56127",
  resumeUrl: "https://customer-assets.emergentagent.com/job_fb8799bc-0ec1-4285-8d36-19647265be88/artifacts/qlkhyj9w_resume_snigdha-1%20%282%29.pdf",
  photoUrl:  "https://customer-assets.emergentagent.com/job_fb8799bc-0ec1-4285-8d36-19647265be88/artifacts/060seyb2_20250623_211531%281%29.jpg",
  socials: {
    github: "https://github.com/snigdhads",
    linkedin: "https://www.linkedin.com/in/snigdha-ds-08977430b",
  },
};

export const stats = [
  { value: "3+",  label: "Projects shipped" },
  { value: "1",   label: "Research internship" },
  { value: "4",   label: "Workshops attended" },
  { value: "7.4", label: "CGPA · B.Tech CSE" },
];

export const aboutWhoami = [
  { key: "name",      value: "D S Snigdha" },
  { key: "role",      value: "CS student · AI/ML researcher" },
  { key: "school",    value: "JNTUA Pulivendula · B.Tech CSE" },
  { key: "focus",     value: "Web Dev, AI/ML, UI/UX" },
  { key: "languages", value: "Telugu, Hindi, English" },
  { key: "loves",     value: "clean code, research, travel" },
];

export const aboutParagraphs = [
  "Currently a third-year B.Tech CSE student at JNTUA College of Engineering, Pulivendula. I care about clean code, thoughtful interfaces, and machine learning that solves real problems.",
  "This summer I worked as an AI/ML Research Intern at IIITDM Kurnool on crop & weed segmentation using multispectral imagery — implementing a U-Net with a ResNet-50 encoder and CRF post-processing for precision agriculture.",
  "Outside of code, I travel, read, and play sports. I'm a quick learner who enjoys turning unfamiliar tools into shipped work.",
];

export const currentlyLearning = [
  "Advanced PyTorch", "System Design", "Next.js", "MLOps basics", "Figma prototyping",
];

export const projects = [
  {
    id: "edu-library", year: "2025",
    title: "Edu Library",
    subtitle: "Monolithic Library Management System",
    role: "Full-stack · Solo build",
    description:
      "Full-stack library management with role-based access for Students, Librarians, and Admins. Includes auth, book search, borrow/return workflows, an inventory module, and an admin dashboard. Containerized with Docker and deployed on AWS EC2.",
    tech: ["Python", "Flask", "SQLite", "HTML", "CSS", "JavaScript", "Docker", "AWS EC2"],
    link: "https://github.com/snigdhads",
  },
  {
    id: "crop-weed", year: "2025",
    title: "Crop & Weed Segmentation",
    subtitle: "U-Net + ResNet-50 with CRF",
    role: "Research · IIITDM Kurnool",
    description:
      "Multispectral (RGB + NIR) deep learning pipeline that segments crops and weeds for precision agriculture. Built on U-Net with a ResNet-50 encoder; CRF post-processing sharpens boundaries across early- and mid-stage crop datasets.",
    tech: ["Python", "PyTorch", "U-Net", "ResNet-50", "CRF", "NumPy", "OpenCV"],
    link: "https://github.com/snigdhads",
  },
  {
    id: "food-ordering", year: "2024",
    title: "Online Food Ordering System",
    subtitle: "Web app · Customer-centric UX",
    role: "Full-stack · Course project",
    description:
      "Browseable menus, order customization, and simulated payments — focused on a responsive, scalable, and friendly customer experience.",
    tech: ["HTML", "CSS", "JavaScript", "SQL"],
    link: "https://github.com/snigdhads",
  },
];

export const experience = [{
  type: "Research Internship",
  role: "AI/ML Research Intern",
  org:  "IIITDM Kurnool",
  period: "May 2025 — Aug 2025",
  points: [
    "Crop & weed segmentation using multispectral (RGB + NIR) imagery for precision agriculture.",
    "Implemented U-Net with a ResNet-50 encoder, tuned for early- and mid-stage crop datasets.",
    "Applied CRF post-processing for sharper boundaries and higher segmentation accuracy.",
    "Owned data preprocessing, training, evaluation, and research documentation end-to-end.",
  ],
}];

export const education = [
  { degree: "B.Tech, Computer Science Engineering", org: "JNTUA College of Engineering, Pulivendula", period: "2023 — 2027", score: "CGPA 7.4" },
  { degree: "Class XII · MPC",  org: "Narayana Junior College",     period: "2021 — 2023", score: "94.2%" },
  { degree: "Class X · CBSE",   org: "Montessori E.M. High School", period: "2020",        score: "92%"   },
];

export const workshops = [
  { title: "AI Tools Workshop",          host: "Clahan Technologies", year: "2025" },
  { title: "Python Programming Workshop", host: "JNTUA Pulivendula",  year: "2024" },
  { title: "Java Programming Workshop",   host: "JNTUA Pulivendula",  year: "2024" },
  { title: "C Programming Workshop",      host: "JNTUA Pulivendula",  year: "2023" },
];

export const toolbox = [
  { category: "Programming",     items: ["Python", "C", "Java (basic)", "SQL"] },
  { category: "Web",             items: ["HTML", "CSS", "JavaScript", "Flask"] },
  { category: "AI / ML",         items: ["PyTorch", "U-Net", "ResNet-50", "CRF", "NumPy", "OpenCV"] },
  { category: "Design & Tools",  items: ["Figma", "UI/UX", "Git", "Docker", "AWS EC2", "VS Code"] },
  { category: "Strengths",       items: ["Problem solving", "Communication", "Leadership", "Teamwork"] },
  { category: "Languages",       items: ["Telugu (native)", "Hindi (fluent)", "English (expert)"] },
];

export const navLinks = [
  { id: "about",      label: "About",      num: "01" },
  { id: "work",       label: "Work",       num: "02" },
  { id: "experience", label: "Experience", num: "03" },
  { id: "toolbox",    label: "Toolbox",    num: "04" },
  { id: "contact",    label: "Contact",    num: "05" },
];