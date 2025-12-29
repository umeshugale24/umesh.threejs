import { useSectionStore } from "../../store/useSectionStore";

export default function Overlay() {
  const { activeSection, closeSection } = useSectionStore();

  if (!activeSection) return null;

  return (
    <div className="overlay">
      <button className="close-btn" onClick={closeSection}>✕</button>

      {activeSection === "projects" && (
        <>
          <h1>Projects</h1>
          <p>🍔 Food Delivery App</p>
          <p>🔐 Secure Chat</p>
          <p>🌱 Crop Disease Detection</p>
        </>
      )}

      {activeSection === "about" && (
        <>
          <h1>About Me</h1>
          <p>Full Stack Developer | React | Spring Boot | AI</p>
        </>
      )}

      {activeSection === "contact" && (
        <>
          <h1>Contact</h1>
          <p>Email: umesh@example.com</p>
          <p>GitHub: umeshugale24</p>
        </>
      )}
    </div>
  );
}
