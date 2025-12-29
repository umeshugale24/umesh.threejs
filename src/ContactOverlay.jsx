import { useSectionStore } from "./store/useSectionStore";

export default function ContactOverlay() {
  const { activeSection, close } = useSectionStore();

  if (activeSection !== "contact") return null;

  return (
    <div style={styles.overlay} className="contact-overlay">
      <button
        style={styles.close}
        className="contact-close"
        onClick={close}
      >
        ✕
      </button>

      <h1>Contact</h1>
      <p style={{ opacity: 0.85 }} className="contact-subtitle">
        Let’s connect — I respond fast.
      </p>

      <div style={styles.card} className="contact-card">
        <Row
          label="Email"
          value="umeshugale24@gmail.com"
          href="mailto:umeshugale24@gmail.com"
        />

        <Row
          label="GitHub"
          value="github.com/umeshugale24"
          href="https://github.com/umeshugale24"
        />

        <Row
          label="LinkedIn"
          value="linkedin.com/in/umeshugale45"
          href="https://www.linkedin.com/in/umeshugale45/"
        />
      </div>
    </div>
  );
}

function Row({ label, value, href }) {
  return (
    <div style={styles.row} className="contact-row">
      <span style={{ opacity: 0.7 }}>{label}</span>

      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          style={styles.link}
          className="contact-link"
        >
          {value}
        </a>
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
}


const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.9)",
    color: "white",
    padding: "80px",
    zIndex: 9999, // 🔥 ABOVE CANVAS
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
  card: {
    marginTop: 24,
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: 16,
    padding: 20,
    maxWidth: 520,
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },
  link: {
  color: "#00c6ff",
  textDecoration: "none",
  fontWeight: 600,
  cursor: "pointer",
  transition: "all 0.25s ease",
},

};
