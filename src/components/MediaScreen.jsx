export default function MediaScreen() {
  return (
    <style>{`
      /* ============================
         MOBILE (≤ 768px)
      ============================ */
      @media screen and (max-width: 768px) {

        /* ---------- ABOUT OVERLAY ---------- */
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

        /* ---------- EXPERIENCE TREE ---------- */
        .experience-card {
          width: 90vw !important;
          padding: 20px !important;
        }

        .experience-heading {
          font-size: 20px !important;
        }

        .experience-node {
          font-size: 14px !important;
        }

        .experience-logo {
          width: 34px !important;
          height: 34px !important;
        }

        /* ---------- INTERACTION HINT ---------- */
        .interaction-hint {
          right: 16px !important;
          bottom: 16px !important;
          top: auto !important;
          max-width: 220px !important;
        }
      }
    `}</style>
  );
}
