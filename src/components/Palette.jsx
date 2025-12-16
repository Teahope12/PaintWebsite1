import React, { useEffect, useState } from "react";

/* ───────────────── WORD TYPEWRITER HOOK ───────────────── */
const useWordTypewriter = (words, speed = 120, pause = 1400) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index % words.length];
    let timeout;

    if (!deleting && text !== currentWord) {
      timeout = setTimeout(
        () => setText(currentWord.slice(0, text.length + 1)),
        speed
      );
    } else if (!deleting && text === currentWord) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text !== "") {
      timeout = setTimeout(
        () => setText(text.slice(0, -1)),
        speed / 1.5
      );
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((prev) => prev + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
};

/* ───────────────── MAGNETIC SWATCH ───────────────── */
const MagneticSwatch = ({ from, to }) => {
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    e.currentTarget.style.transform = `
      translate(${x * 0.18}px, ${y * 0.18}px)
      scale(1.06)
    `;
  };

  const handleLeave = (e) => {
    e.currentTarget.style.transform = "translate(0,0) scale(1)";
  };

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        width: "72px",
        height: "72px",
        borderRadius: "14px",
        background: `
          linear-gradient(135deg, ${from}, ${to}),
          repeating-linear-gradient(
            45deg,
            rgba(255,255,255,0.05),
            rgba(255,255,255,0.05) 2px,
            rgba(0,0,0,0.05) 3px
          )
        `,
        boxShadow: "0 10px 22px rgba(0,0,0,0.18)",
        transition: "transform 0.25s cubic-bezier(0.22,1,0.36,1)",
        cursor: "pointer",
        willChange: "transform",
      }}
    />
  );
};

/* ───────────────── PALETTE SECTION ───────────────── */
const Palette = () => {
  const typedText = useWordTypewriter(["Our Palette"]);

  return (
    <section id="palettes" style={{ width: "100%" }}>
      <div
        style={{
          position: "relative",
          backgroundImage:
            'url("https://img.freepik.com/premium-photo/color-palette-swatches-different-colors-with-brush-roller-paint-sample-catalog-guide_508191-2581.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "clamp(70px, 14vw, 100px) 20px",
        }}
      >
        {/* LIGHT OVERLAY */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(255,255,255,0.65), rgba(255,255,255,0.45))",
          }}
        />

        {/* CONTENT */}
        <div
          style={{
            position: "relative",
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(220px, 1fr) 1.2fr",
            gap: "clamp(40px, 8vw, 80px)",
            alignItems: "center",
          }}
        >
          {/* LEFT — MAGNETIC SWATCH GRID */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(72px, 1fr))",
              gap: "18px",
              maxWidth: "320px",
            }}
          >
            {[
              ["#5E2B2B", "#D9A441"],
              ["#0C4A6E", "#22D3EE"],
              ["#2F4F4F", "#6B8376"],
              ["#7A1F4B", "#F1D6C7"],
              ["#EFE7D5", "#D1BCA8"],
              ["#6B8376", "#546E61"],
            ].map(([from, to], i) => (
              <MagneticSwatch key={i} from={from} to={to} />
            ))}
          </div>

          {/* RIGHT — TEXT */}
          <div>
            {/* PAINT STROKE + TYPEWRITER */}
            <div style={{ position: "relative", display: "inline-block" }}>
              <div
                style={{
                  position: "absolute",
                  inset: "-6px -12px",
                  background:
                    "linear-gradient(120deg, #d1bca8, #efe7d5)",
                  zIndex: 0,
                  borderRadius: "6px",
                  animation: "paintReveal 2.8s ease-in-out infinite",
                }}
              />

              <h2
                style={{
                  position: "relative",
                  fontSize: "clamp(26px, 6vw, 40px)",
                  fontWeight: 400,
                  color: "#3f5a4f",
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: "0.4px",
                  marginBottom: "14px",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                {typedText}
                <span
                  style={{
                    marginLeft: "4px",
                    width: "1px",
                    height: "1.2em",
                    backgroundColor: "#3f5a4f",
                    animation: "blink 1s infinite",
                  }}
                />
              </h2>
            </div>

            <p
              style={{
                maxWidth: "520px",
                fontSize: "14px",
                lineHeight: "1.8",
                color: "#444",
                marginBottom: "26px",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              A curated selection of tones designed to bring harmony, warmth,
              and character into every space.
            </p>

            <button
              style={{
                padding: "12px 34px",
                backgroundColor: "#546E61",
                color: "#ffffff",
                border: "none",
                fontSize: "14px",
                letterSpacing: "1px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#3f5a4f";
                e.target.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#546E61";
                e.target.style.transform = "translateY(0)";
              }}
            >
              View More
            </button>
          </div>
        </div>
      </div>

      {/* ───────── ANIMATIONS ───────── */}
      <style>{`
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }

        @keyframes paintReveal {
          0% { clip-path: inset(0 100% 0 0); }
          40% { clip-path: inset(0 0 0 0); }
          70% { clip-path: inset(0 0 0 0); }
          100% { clip-path: inset(0 0 0 100%); }
        }
      `}</style>
    </section>
  );
};

export default Palette;
