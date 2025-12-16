import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact">
      {/* MAIN SECTION */}
      <div
        style={{
          position: "relative",
          backgroundImage:
            'url("https://www.americantownpainting.com/wp-content/uploads/2024/01/textured-paint-for-homes-600x400.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* 🔥 LIGHT OVERLAY (LESS OPAQUE) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(239,231,213,0.45), rgba(239,231,213,0.6))",
          }}
        />

        {/* CONTENT */}
        <div
          style={{
            position: "relative",
            padding: "clamp(50px, 10vw, 80px) 20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "880px",
              textAlign: "center",
            }}
          >
            {/* TITLE */}
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(28px, 6vw, 42px)",
                fontWeight: 400,
                color: "#546E61",
                marginBottom: "8px",
              }}
            >
              Contact Us
            </h2>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "15px",
                letterSpacing: "1px",
                color: "#6b8376",
                marginBottom: "42px",
              }}
            >
              QUESTIONS? <br />
              READY FOR A QUOTE? WE’RE HERE TO HELP
            </p>

            {/* FORM / SUCCESS */}
            {submitted ? (
              <div
                style={{
                  fontSize: "18px",
                  color: "#3f5a4f",
                }}
              >
                Thank you for reaching out.
                <br />
                We’ll be in touch shortly.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  maxWidth: "700px",
                  margin: "0 auto",

                  /* ✅ GLASS MORPHISM */
                  background: "rgba(255,255,255,0.35)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",

                  borderRadius: "20px",
                  border: "1px solid rgba(255,255,255,0.45)",
                  boxShadow:
                    "0 30px 60px rgba(0,0,0,0.25), inset 0 1px 1px rgba(255,255,255,0.35)",

                  padding: "40px 30px 46px",
                }}
              >
                {/* NAME */}
                <div
                  style={{
                    display: "flex",
                    gap: "24px",
                    marginBottom: "26px",
                    flexWrap: "wrap",
                  }}
                >
                  <FloatingInput label="First Name *" />
                  <FloatingInput label="Last Name *" />
                </div>

                {/* EMAIL */}
                <div style={{ marginBottom: "26px" }}>
                  <FloatingInput label="Email *" full />
                </div>

                {/* MESSAGE */}
                <div style={{ marginBottom: "34px" }}>
                  <FloatingTextarea label="Message *" />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  style={{
                    padding: "12px 44px",
                    backgroundColor: "#546E61",
                    color: "#fff",
                    border: "none",
                    fontSize: "14px",
                    letterSpacing: "1.2px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "translateY(-2px)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.transform = "translateY(0)")
                  }
                >
                  Send Message
                </button>
              </form>
            )}

            {/* FOOT INFO */}
            <div
              style={{
                marginTop: "50px",
                fontSize: "11px",
                color: "#5f5f5f",
                display: "flex",
                justifyContent: "center",
                gap: "28px",
                flexWrap: "wrap",
              }}
            >
              <span>Tel: 123-456-7890</span>
              <span>Email: info@mysite.com</span>
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* INPUT */
const FloatingInput = ({ label, full }) => (
  <div
    style={{
      flex: full ? "unset" : "1 1 240px",
      width: full ? "100%" : "auto",
      position: "relative",
    }}
  >
    <input
      required
      style={{
        width: "100%",
        background: "transparent",
        border: "none",
        borderBottom: "1px solid rgba(0,0,0,0.35)",
        padding: "14px 0 6px",
        fontSize: "13px",
        outline: "none",
        color: "#333",
      }}
    />
    <label
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        fontSize: "11px",
        color: "#555",
      }}
    >
      {label}
    </label>
  </div>
);

/* TEXTAREA */
const FloatingTextarea = ({ label }) => (
  <div style={{ position: "relative" }}>
    <textarea
      required
      style={{
        width: "100%",
        background: "transparent",
        border: "none",
        borderBottom: "1px solid rgba(0,0,0,0.35)",
        padding: "14px 0 6px",
        fontSize: "13px",
        resize: "none",
        height: "80px",
        color: "#333",
      }}
    />
    <label
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        fontSize: "11px",
        color: "#555",
      }}
    >
      {label}
    </label>
  </div>
);

export default Contact;
