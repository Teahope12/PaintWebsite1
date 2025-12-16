import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  const links = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Palettes", id: "palettes" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "rgba(84,110,97,0.92)",
        backdropFilter: "blur(8px)",
        zIndex: 9999,
        boxShadow: "0 1px 6px rgba(0,0,0,0.12)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
        }}
      >
        {/* BRAND */}
        <div
          onClick={() => scrollToSection("home")}
          style={{ cursor: "pointer" }}
        >
          <div style={{ fontSize: "13px", letterSpacing: "2px", color: "#fff" }}>
            PAINT & CO
          </div>
          <div style={{ fontSize: "9px", opacity: 0.8, color: "#fff" }}>
            Color Consultants
          </div>
        </div>

        {/* HAMBURGER */}
        <div
          onClick={() => setOpen(!open)}
          style={{ display: "flex", flexDirection: "column", gap: "4px" }}
        >
          <span style={barStyle} />
          <span style={barStyle} />
          <span style={barStyle} />
        </div>
      </div>

      {/* MOBILE NAV */}
      {open && (
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "18px",
            padding: "20px 0 26px",
            fontSize: "11px",
            letterSpacing: "1.2px",
            textTransform: "uppercase",
            backgroundColor: "rgba(84,110,97,0.98)",
            color: "#fff",
          }}
        >
          {links.map((link) => (
            <span
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              style={{ cursor: "pointer" }}
            >
              {link.label}
            </span>
          ))}
        </nav>
      )}

      {/* DESKTOP NAV */}
      <nav
        className="desktop-nav"
        style={{
          display: "none",
          justifyContent: "center",
          gap: "32px",
          paddingBottom: "10px",
          fontSize: "11px",
          letterSpacing: "1.2px",
          textTransform: "uppercase",
          color: "#fff",
        }}
      >
        {links.map((link) => (
          <span
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            style={{ cursor: "pointer", opacity: 0.9 }}
          >
            {link.label}
          </span>
        ))}
      </nav>

      <style>
        {`
          @media (min-width: 768px) {
            .desktop-nav {
              display: flex !important;
            }
          }
        `}
      </style>
    </header>
  );
};

const barStyle = {
  width: "20px",
  height: "2px",
  backgroundColor: "#ffffff",
};

export default Header;
