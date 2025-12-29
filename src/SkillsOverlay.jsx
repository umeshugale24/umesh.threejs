import { useSectionStore } from "./store/useSectionStore";

const SKILLS = {
  "Frontend": [
    "React",
    "JavaScript",
    "Three.js",
    "MUI",
    "Tailwind CSS",
  ],
  "Backend": [
    "Java",
    "Spring Boot",
    "Node.js",
    "REST APIs",
    "SOAP APIs"
  ],
  "Databases": [
    "MySQL",
    "MongoDB",
    "PostgreSQL",
  ],
  "Cloud / Platforms": [
    "Salesforce",
    "AWS",
    "Docker",
    "CI/CD",
  ],
  "Tools": [
    "Git",
    "Postman",
    "VS Code",
  ],
  "Salesforce Tools":[
    "Apex",
    "LWC",
    "SOQL",
    "Agentforce",
    "Salesforce CPQ cloud",
    "Salesforce Sales cloud",
    "Data Loader",
    "Workbench",
  ],
};

export default function SkillsOverlay() {
  const { activeSection, close } = useSectionStore();

  if (activeSection !== "skills") return null;

  return (
    <div style={styles.overlay}>
      <button style={styles.close} onClick={close}>✕</button>

      <h1>Skills</h1>
      <p style={{ opacity: 0.8 }}>
        Technologies I use to build scalable, production-ready systems.
      </p>

      <div style={styles.grid}>
        {Object.entries(SKILLS).map(([category, items]) => (
          <div key={category} style={styles.category}>
            <h3>{category}</h3>
            <div style={styles.skillGrid}>
              {items.map((skill) => (
                <div key={skill} style={styles.skill} className="skill-card">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.92)",
    color: "white",
    padding: "80px",
    zIndex: 9999,
    overflowY: "auto",
  },
  close: {
    position: "absolute",
    top: 20,
    right: 40,
    background: "none",
    border: "none",
    color: "white",
    fontSize: 28,
    cursor: "pointer",
  },
  grid: {
    marginTop: 40,
    display: "grid",
    gap: 40,
  },
  category: {
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: 16,
    padding: 24,
    background: "rgba(255,255,255,0.04)",
  },
  skillGrid: {
    marginTop: 16,
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
  },
  skill: {
    padding: "8px 14px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
    transformStyle: "preserve-3d",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
  },
};
