import { useEffect, useState, useRef } from "react";

export default function InteractionHint() {
  const [visible, setVisible] = useState(false);
  const mounted = useRef(false);

  useEffect(() => {
    // Prevent React StrictMode double-run issues
    if (mounted.current) return;
    mounted.current = true;

    const seen = sessionStorage.getItem("hint-seen");

    if (!seen) {
      setVisible(true);
      sessionStorage.setItem("hint-seen", "true");

      // Auto-hide after 6 seconds
      const timer = setTimeout(() => {
        setVisible(false);
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!visible) return null;

  return (
    <div style={styles.wrapper} onClick={() => setVisible(false)}>
      <div style={styles.box}>
        <h4 style={{ marginBottom: 10 }}>How to interact</h4>

        <div style={styles.item}>🖱 Scroll Down → Experience</div>
        <div style={styles.item}>🖥 Click screen → To Zoom</div>
        <div style={styles.item}>🖥 Click screen → Project</div>
        <div style={styles.item}>⌨️ Click keyboard → About</div>
        <div style={styles.item}>🖱 Click trackpad → Contact</div>

        <p style={styles.note}>Click anywhere to dismiss</p>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
  position: "fixed",
  bottom: 24,   // 👈 move to bottom
  right: 24,
  zIndex: 20000,
  cursor: "pointer",
},

  box: {
    background: "rgba(0,0,0,0.9)",
    border: "1px solid rgba(255,255,255,0.25)",
    borderRadius: 14,
    padding: "16px 18px",
    color: "white",
    maxWidth: 260,
    boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
    backdropFilter: "blur(8px)",
    animation: "hintFadeIn 0.4s ease-out, hintFadeOut 0.4s ease-out 5.6s forwards",

  },
  item: {
    marginTop: 8,
    fontSize: 14,
    opacity: 0.9,
  },
  note: {
    marginTop: 12,
    fontSize: 12,
    opacity: 0.6,
  },
};
