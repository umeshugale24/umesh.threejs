export default function ResumeButton() {
  function openResume(e) {
    e.preventDefault();
    window.open(
      "/resume/Umesh_Ugale_Resume.pdf",
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <a
      href="/resume/Umesh_Ugale_Resume.pdf"
      onClick={openResume}
      style={styles.button}
      className="resume-button"
    >
      📄 Resume
    </a>
  );
}


const styles = {
  button: {
    position: "fixed",
    top: 22,
    left: 28,

    zIndex: 10000,
    padding: "10px 18px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.95)",
    color: "#000",
    fontWeight: 600,
    textDecoration: "none",
    letterSpacing: 0.4,
    boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
    backdropFilter: "blur(6px)",
    transformStyle: "preserve-3d",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
  },
};
