import { useEffect, useState, useRef } from "react";

export default function IntroCard() {
  const [visible, setVisible] = useState(false);
  const mounted = useRef(false);

  useEffect(() => {
    // Prevent StrictMode double run
    if (mounted.current) return;
    mounted.current = true;

    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 7000); // ✅ 10 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        {/* 👤 Profile Photo */}
        <img
          src="/me.jpg"
          alt="Umesh Ugale"
          style={styles.avatar}
        />

        <h3 style={styles.name}>Hi, I’m Umesh Ugale 👋</h3>

        <p style={styles.role}>
          Software Engineer with 2+ years of experience  
        </p>
        <p style={styles.role}>
            Java · React · Salesforce · Distributed Systems 
            </p>
        <p style={styles.role}>
            Building scalable full-stack web applications and Salesforce Integrations.
        </p>
        <p style={styles.email}>
  <a
    href="mailto:umeshugale24@gmail.com"
    style={styles.emailLink}
  >
    umeshugale24@gmail.com
  </a>
</p>

      </div>
    </div>
  );
}

const styles = {
  wrapper: {
  position: "fixed",
  top: 24,          // 👈 move higher
  right: 24,
  zIndex: 21000,
  pointerEvents: "none",
},

  card: {
    background: "rgba(0,0,0,0.85)",
    border: "1px solid rgba(255,255,255,0.25)",
    borderRadius: 16,
    padding: "18px 20px",
    color: "white",
    maxWidth: 320,
    textAlign: "center",
    boxShadow: "0 18px 36px rgba(0,0,0,0.6)",
    animation: "introFade 0.4s ease-out, introFadeOut 0.4s ease-out 9.6s forwards",
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: 10,
    border: "2px solid rgba(255,255,255,0.3)",
  },
  name: {
    margin: 0,
    fontSize: 18,
    fontWeight: 600,
  },
  role: {
    marginTop: 6,
    fontSize: 14,
    opacity: 0.85,
  },
  email: {
  marginTop: 10,
  fontSize: 14,
  opacity: 0.9,
},

emailLink: {
  color: "#7dd3fc",           // subtle blue
  textDecoration: "none",
  fontWeight: 500,
  pointerEvents: "auto",      // 👈 enables click
},


};
