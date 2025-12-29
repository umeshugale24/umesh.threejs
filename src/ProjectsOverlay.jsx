import { useSectionStore } from "./store/useSectionStore";

export default function ProjectsOverlay() {
  const { activeSection, close } = useSectionStore();

  if (activeSection !== "projects") return null;

  return (
    <div style={styles.overlay}>
      <button style={styles.close} onClick={close}>✕</button>

      <h1>Projects</h1>
      <p style={{ opacity: 0.8 }}>
        Click a project to view the GitHub repository.
      </p>

      <div style={styles.grid}>
        <ProjectCard
          title="Collaborative Document Editor"
          tech="Spring Boot · React MUI · MongoDB · WebSockets"
          desc="Real-time collaborative text editor with user authentication and version control using STOMP."
          repo="https://github.com/umeshugale24"
        />
        <ProjectCard
          title="Food Delivery App"
          tech="Spring Boot · React · MySQL · Stripe · OpenAI API "
          desc="Full-stack food ordering platform with secure payments using Stripe."
          repo="https://github.com/umeshugale24/Final_Project"
        />
        <ProjectCard
          title="Secure Text Communication Using Cryptography" 
          tech="JAVA · RSA · PostgreSQL · OpenAI API"
          desc="Reduced quote processing time by 40%."
          repo="https://github.com/your-username/salesforce-cpq"
        />
      </div>
    </div>
  );
}

function ProjectCard({ title, tech, desc, repo }) {
  return (
    <a
      href={repo}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.card}
      className="project-card"
    >
      <h3>{title}</h3>
      <p style={{ opacity: 0.7 }}>{tech}</p>
      <p>{desc}</p>
    </a>
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
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 24,
  },
  card: {
    display: "block",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: 16,
    padding: 20,
    textDecoration: "none",
    color: "white",
    background: "rgba(255,255,255,0.04)",
    transformStyle: "preserve-3d",
    transition: "transform 0.35s ease, box-shadow 0.35s ease",
    
  },
};
