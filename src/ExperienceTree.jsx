export default function ExperienceTree({ show }) {
  // ✅ normalize show → visibility (0 → 1)
  const visibility =
    typeof show === "number" ? Math.min(Math.max(show, 0), 1) : show ? 1 : 0;

  return (
    <div
      style={{
        ...styles.wrapper,
        opacity: visibility,
       transform: `
  translate(-50%, -50%)
  scale(${0.96 + visibility * 0.12})
`,

      }}
    >
      <div style={styles.card}>
        <h3 style={styles.heading}>Experience</h3>

        <div style={styles.timeline}>
          <div style={styles.node}>
            <img src="/logos/csuf.png" alt="CSUF" style={styles.logo} />
          <div>
             <strong>2024 – 2025</strong>
            <p>
           Cal State Fullerton
      <br />
       MS Computer Science
    </p>
  </div>
</div>


          <div style={styles.node}>
  <img src="/logos/acc.png" alt="Accenture" style={styles.logo} />
  <div>
    <strong>2021 – 2023</strong>
    <p>
      Accenture
      <br />
      Software Engineer
    </p>
  </div>
</div>


          <div style={styles.node}>
            <img src="/logos/sppu.png" alt="SPPU" style={styles.logo} />
            <div>
              <strong>2017 – 2021</strong>
              <p>
                SPPU
                <br />
                Bachelor of Engineering in Computer Science
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    position: "fixed",
    left: "50%",
    top: "50%",
    zIndex: 18000,
    pointerEvents: "none",
    transition:
      "opacity 0.6s ease, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), filter 0.6s ease",
  },

  // ⬆️ CARD MADE BIGGER
  card: {
    background: "rgba(0,0,0,0.88)",
    border: "1px solid rgba(255,255,255,0.25)",
    borderRadius: 18,
    padding: "26px 28px",
    color: "white",
    width: 420,               // ⬅️ increased from 300
    boxShadow: "0 24px 50px rgba(0,0,0,0.65)",
  },

  heading: {
    marginBottom: 18,
    fontSize: 22,             // ⬅️ bigger heading
    fontWeight: 600,
    letterSpacing: 0.3,
  },

  timeline: {
    display: "flex",
    flexDirection: "column",
    gap: 22,                  // ⬅️ more spacing
  },

  node: {
    display: "flex",
    gap: 16,                  // ⬅️ more space between logo & text
    alignItems: "flex-start",
    fontSize: 16,             // ⬅️ bigger text
    lineHeight: 1.4,
    opacity: 0.95,
  },

  // ⬆️ LOGOS MADE BIGGER & CLEARER
  logo: {
    width: 42,                // ⬅️ increased
    height: 42,
    borderRadius: "50%",
    objectFit: "contain",
    background: "white",
    padding: 6,
    flexShrink: 0,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    background: "#7dd3fc",
    marginTop: 8,
    flexShrink: 0,
  },
};
