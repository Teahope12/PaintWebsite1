import React from "react";

const Services = () => {
  return (
    <section
      id="services"
      style={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        backgroundImage: `
          linear-gradient(
            rgba(239,231,213,0.92),
            rgba(239,231,213,0.92)
          ),
          url("/image1.png"),
          url("/image2.png")
        `,
        backgroundSize: "cover, 50% 100%, 50% 100%",
        backgroundPosition: "center, left center, right center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* CONTENT */}
      <div
        style={{
          padding: "clamp(70px, 10vw, 120px) 20px",
          textAlign: "center",
          fontFamily: "'Playfair Display', serif",
        }}
      >
        {/* TITLE */}
        <h2
          style={{
            fontSize: "clamp(28px, 6vw, 42px)",
            fontWeight: 400,
            color: "#6B8376",
            marginBottom: "clamp(40px, 8vw, 70px)",
            letterSpacing: "0.6px",
          }}
        >
          Our Services
        </h2>

        {/* SERVICES GRID */}
        <div className="services-grid">
          <Service
            icon={<PaintBucketIcon />}
            title="INDOOR & OUTDOOR PAINTING"
            description="High-quality finishes for interiors and exteriors with lasting durability."
          />
          <Service
            icon={<ColorWheelIcon />}
            title="IN-HOME COLOR CONSULTANCY"
            description="Expert guidance to help you choose the perfect palette for your space."
          />
          <Service
            icon={<PaletteIcon />}
            title="PALETTE PRODUCTION"
            description="Custom-crafted color palettes designed for harmony and balance."
          />
          <Service
            icon={<BrushIcon />}
            title="COATS & RESTORATION"
            description="Restoration and protective coatings that preserve beauty over time."
          />
        </div>

        {/* BUTTON */}
        <button
          style={{
            marginTop: "clamp(40px, 8vw, 60px)",
            padding: "14px 40px",
            backgroundColor: "#6b8376",
            color: "#fff",
            border: "none",
            fontSize: "14px",
            cursor: "pointer",
            letterSpacing: "0.8px",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#5a756a";
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#6b8376";
            e.target.style.transform = "translateY(0)";
          }}
        >
          All Services
        </button>
      </div>

      {/* GRID + ANIMATION STYLES */}
      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: clamp(36px, 6vw, 60px);
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 clamp(16px, 4vw, 40px);
        }

        .service-card {
          animation: floatSoft 6s ease-in-out infinite;
        }

        .service-card:nth-child(2) { animation-delay: 0.8s; }
        .service-card:nth-child(3) { animation-delay: 1.6s; }
        .service-card:nth-child(4) { animation-delay: 2.4s; }

        @keyframes floatSoft {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

const Service = ({ icon, title, description }) => (
  <div className="service-card">
    <div
      style={{
        fontSize: "56px", // ⬅ bigger icon size
        marginBottom: "22px",
        color: "#5a5a5a",
      }}
    >
      {icon}
    </div>

    <h4
      style={{
        fontSize: "16px",
        letterSpacing: "1.8px",
        marginBottom: "16px",
        lineHeight: "1.6",
        color: "#333",
        fontWeight: 600,
      }}
    >
      {title}
    </h4>

    <p
      style={{
        fontSize: "18px", // ⬅ slightly bigger text
        color: "#777",
        lineHeight: "1.9",
        maxWidth: "260px",
        margin: "0 auto",
        fontFamily: "'Playfair Display', serif",
      }}
    >
      {description}
    </p>
  </div>
);

/* ICONS */
const PaintBucketIcon = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M19 11H5M19 11C20.1 11 21 11.9 21 13V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V13C3 11.9 3.9 11 5 11V9C5 8 6 7 7 7H17C18 7 19 8 19 9V11Z" />
  </svg>
);

const ColorWheelIcon = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3V12L18 18" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const PaletteIcon = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
  </svg>
);

const BrushIcon = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M9 5L12 2L22 12L19 15M9 5L5 9C4 10 4 11 4 12V18C4 19 5 20 6 20H12C13 20 14 19 15 18L19 15" />
  </svg>
);

export default Services;
