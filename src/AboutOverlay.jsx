import { useSectionStore } from "./store/useSectionStore";

export default function AboutOverlay() {
  const { activeSection, close, openSection } = useSectionStore();

  if (activeSection !== "about") return null;

  return (
    <>
      {/* 📱 Mobile media styles */}
      <style>{`
        @media screen and (max-width: 768px) {
          .about-overlay {
            padding: 24px !important;
          }

          .about-overlay h1 {
            font-size: 28px !important;
          }

          .about-paragraph {
            font-size: 15px !important;
            line-height: 1.6 !important;
            max-width: 100% !important;
          }

          .about-close {
            top: 16px !important;
            right: 16px !important;
            font-size: 24px !important;
          }

          .about-cta {
            width: 100% !important;
            padding: 14px 20px !important;
            font-size: 15px !important;
          }
        }
      `}</style>

      <div style={styles.overlay} className="about-overlay">
        <button
          style={styles.close}
          className="about-close"
          onClick={close}
        >
          ✕
        </button>

        <h1>About Me</h1>

        <p style={styles.paragraph} className="about-paragraph">
          Hello, I’m Umesh — MS in Computer Science and Software Engineer with
          2 years of experience.
        </p>

        <p style={styles.paragraph} className="about-paragraph">
          Passionate about AI / ML and distributed secure systems.
        </p>

        <p style={styles.paragraph} className="about-paragraph">
          I specialize in building scalable web applications using React, Java,
          Spring Boot, cloud platforms, and Salesforce integrations using
          REST/SOAP APIs.
        </p>

        <p style={styles.paragraph} className="about-paragraph">
          I have worked on Salesforce-based Sales and CPQ Cloud.
        </p>

        <p style={styles.paragraph} className="about-paragraph">
          I am 2× Salesforce Certified.
        </p>

        <p style={styles.paragraph} className="about-paragraph">
          You can find my work on
          <a
            href="https://github.com/umeshugale24"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
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
          </a>
          ,
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

        <p style={styles.paragraph} className="about-paragraph">
          Technologies I work with 👇
        </p>

        <button
          style={styles.cta}
          className="about-cta"
          onClick={() => openSection("skills")}
        >
          View Skills →
        </button>
      </div>
    </>
  );
}
