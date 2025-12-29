export default function MobileView() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Umesh Ugale</h1>

      <p style={styles.subtitle}>
        Full Stack Developer · Salesforce · 3D Web
      </p>

      <a
        style={styles.resume}
        href="/resume/Umesh_Ugale_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        📄 Download Resume
      </a>

      <section style={styles.section}>
        <h2>About</h2>
        <p>
          Full-stack developer with experience in React, Three.js,
          Salesforce CPQ, and scalable backend systems.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Projects</h2>
        <ul>
          <li>
            <a href="https://github.com/your-username/3d-portfolio">
              3D Interactive Portfolio
            </a>
          </li>
          <li>
            <a href="https://github.com/your-username/food-delivery-app">
              Food Delivery App
            </a>
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Skills</h2>
        <p>React · Three.js · Java · Spring Boot · Salesforce</p>
      </section>

      <section style={styles.section}>
        <h2>Contact</h2>
        <p>Email: umesh@example.com</p>
        <p>LinkedIn: linkedin.com/in/your-link</p>
      </section>
    </div>
  );
}

/* ✅ REQUIRED: styles MUST exist */
const styles = {
  container: {
    padding: 20,
    fontFamily: "system-ui, sans-serif",
    lineHeight: 1.6,
  },
  title: {
    marginBottom: 4,
  },
  subtitle: {
    opacity: 0.7,
    marginBottom: 16,
  },
  resume: {
    display: "inline-block",
    marginBottom: 30,
    padding: "10px 18px",
    borderRadius: 999,
    background: "#000",
    color: "#fff",
    textDecoration: "none",
  },
  section: {
    marginBottom: 30,
  },
};
