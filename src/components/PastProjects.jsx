import React, { useState, useRef } from "react";

const projects = [
  { image: "/image3.jpg", title: "Residential Painting", desc: "Elegant finishes crafted for modern living spaces." },
  { image: "/image6.jpg", title: "Commercial Spaces", desc: "Durable, high-quality coatings for workplaces." },
  { image: "/image9.jpeg", title: "Interior Detailing", desc: "Precision work that enhances every corner." },
  { image: "/image12.jpg", title: "Exterior Restoration", desc: "Weather-resistant solutions with lasting beauty." },
  { image: "/image4.jpg", title: "Accent Wall Design", desc: "Bold statements with perfectly balanced tones." },
  { image: "/image7.jpg", title: "Luxury Finishes", desc: "Premium textures and refined surface treatments." },
];

const ITEMS_PER_PAGE = 4;

const PastProjects = () => {
  const [page, setPage] = useState(0);
  const prevPage = useRef(0);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const start = page * ITEMS_PER_PAGE;
  const visibleProjects = projects.slice(start, start + ITEMS_PER_PAGE);

  const direction = page > prevPage.current ? "right" : "left";
  prevPage.current = page;

  return (
    <section
      id="projects"
      style={{
        backgroundColor: "#EFE7D5",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          backgroundColor: "#F7F3EB",
          padding: "60px 20px 70px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(24px, 6vw, 36px)",
            fontWeight: 400,
            color: "#546E61",
            marginBottom: "14px",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Past Projects
        </h2>

        <p
          style={{
            fontSize: "14px",
            lineHeight: "1.8",
            color: "#777",
            maxWidth: "720px",
            margin: "0 auto",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          A curated selection of our work, reflecting craftsmanship,
          thoughtful use of color, and attention to detail.
        </p>
      </div>

      {/* PROJECT GRID */}
      <div style={{ padding: "60px 20px 120px" }}>
        <div key={page} className={`projects-grid slide-${direction}`}>
          {visibleProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* DOTS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            marginTop: "46px",
          }}
        >
          {Array.from({ length: totalPages }).map((_, i) => (
            <span
              key={i}
              onClick={() => setPage(i)}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                cursor: "pointer",
                backgroundColor: page === i ? "#6B8376" : "#cfcfcf",
                transition: "background-color 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>

      {/* STYLES */}
      <style>
        {`
          .projects-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 28px;
            max-width: 1200px;
            margin: 0 auto;
            animation-duration: 0.55s;
            animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
            animation-fill-mode: both;
          }

          .slide-right {
            animation-name: slideFromRight;
          }

          .slide-left {
            animation-name: slideFromLeft;
          }

          @keyframes slideFromRight {
            from {
              opacity: 0;
              transform: translateX(60px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideFromLeft {
            from {
              opacity: 0;
              transform: translateX(-60px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @media (max-width: 1024px) {
            .projects-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 600px) {
            .projects-grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </section>
  );
};

/* PROJECT CARD WITH PAINT-WASH OVERLAY */
const ProjectCard = ({ project }) => (
  <div
    className="project-card"
    style={{
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 14px 30px rgba(0,0,0,0.14)",
      transition: "transform 0.35s ease, box-shadow 0.35s ease",
      position: "relative",
    }}
  >
    {/* IMAGE */}
    <div style={{ height: "180px", position: "relative", overflow: "hidden" }}>
      <img
        src={project.image}
        alt={project.title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* PAINT WASH OVERLAY */}
      <div className="paint-overlay" />
    </div>

    {/* CONTENT */}
    <div style={{ padding: "18px", textAlign: "center" }}>
      <h4
        style={{
          fontSize: "12px",
          letterSpacing: "1px",
          marginBottom: "8px",
          color: "#333",
          textTransform: "uppercase",
        }}
      >
        {project.title}
      </h4>

      <p
        style={{
          fontSize: "13px",
          lineHeight: "1.7",
          color: "#777",
        }}
      >
        {project.desc}
      </p>
    </div>

    {/* HOVER STYLES */}
    <style>
      {`
        .project-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 22px 40px rgba(0,0,0,0.2);
        }

        .paint-overlay {
          position: absolute;
          inset: 0;
          background: 
            linear-gradient(
              120deg,
              rgba(239,231,213,0.65),
              rgba(107,131,118,0.55)
            );
          transform: translateX(-100%);
          transition: transform 0.5s ease;
          mix-blend-mode: multiply;
        }

        .project-card:hover .paint-overlay {
          transform: translateX(0);
        }
      `}
    </style>
  </div>
);

export default PastProjects;
