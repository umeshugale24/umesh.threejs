import { useSectionStore } from "./store/useSectionStore";

export default function AboutOverlay() {
  const { activeSection, close, openSection } = useSectionStore();

  if (activeSection !== "about") return null;

  return (
    <div style={styles.overlay} className="about-overlay">
      <button style={styles.close} onClick={close}>✕</button>

      <h1>About Me</h1>
      <p style={styles.paragraph} className="about-paragraph">
       Hello, I’m Umesh - MS in Computer Science and Software Engineer with 2 years of experience.
        </p>
        <p style={styles.paragraph} className="about-paragraph">
            Passionate about AI / ML and distributed secure systems.
        </p>
        <p style={styles.paragraph} className="about-paragraph">I specialize in building scalable web applications using React, Java, Spring Boot, and cloud-based platforms and Salesforce integrations using REST/SOAP apis.</p>
        <p style={styles.paragraph} className="about-paragraph">I have worked on Salesforce based Sales and CPQ cloud.</p>
        <p style={styles.paragraph} className="about-paragraph">I am 2X Salesforce Certified.</p>

      

        <p style={styles.paragraph} className="about-paragraph">
  You can find my work on
  <a
    href="https://github.com/umeshugale24"
    target="_blank"
    rel="noopener noreferrer"
    style={styles.link}
    onMouseEnter={(e) =>
      (e.currentTarget.style.borderBottom =
        "1px solid rgba(0,198,255,0.9)")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.borderBottom =
        "1px solid rgba(0,198,255,0.4)")
    }
  >
    GitHub
  </a>
  , 
  <a
    href="https://leetcode.com/u/UmeshUgale/"
    target="_blank"
    rel="noopener noreferrer"
    style={styles.link}
  >
    LeetCode
  </a>,
  <a
    href="https://www.salesforce.com/trailblazer/uugale24"
    target="_blank"
    rel="noopener noreferrer"
    style={styles.link}
  >
    Trailhead
  </a>
  .
</p>
<p style={styles.paragraph}>Technologies I work with 👇:</p>


      <button
  style={styles.cta}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-2px) scale(1.03)";
    e.currentTarget.style.boxShadow =
      "0 10px 30px rgba(0, 153, 255, 0.35)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0) scale(1)";
    e.currentTarget.style.boxShadow =
      "0 6px 20px rgba(0, 153, 255, 0.25)";
  }}
  onClick={() => openSection("skills")}
>
  View Skills →
</button>



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
    zIndex: 10,
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
  cta: {
  marginTop: "30px",
  padding: "14px 28px",
  fontSize: "16px",
  fontWeight: 600,
  letterSpacing: "0.5px",
  color: "#fff",
  background:
    "linear-gradient(135deg, #00c6ff, #0072ff)",
  border: "none",
  borderRadius: "999px",
  cursor: "pointer",
  transition: "all 0.25s ease",
  boxShadow: "0 6px 20px rgba(0, 153, 255, 0.25)",
},
paragraph: {
  fontSize: "18px",
  lineHeight: "1.7",
  color: "rgba(255,255,255,0.85)",
  maxWidth: "720px",
  marginBottom: "18px",
  fontWeight: 400,
},
link: {
  color: "#00c6ff",
  textDecoration: "none",
  fontWeight: 600,
  marginLeft: "6px",
  borderBottom: "1px solid rgba(0,198,255,0.4)",
  transition: "all 0.25s ease",
},


};
