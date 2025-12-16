const Hero = () => {
  return (
    <section id="home">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span>Where Paint</span>
            <br />
            <span>Is Our Passion</span>
          </h1>

          <div className="divider" />

          <p className="hero-quote">Every shade tells a story</p>
        </div>

        <style>{`
          .hero {
            min-height:70vh;
            display:flex;
            align-items:center;
            justify-content:center;
            text-align:center;
            background-size:cover;
            background-position:center;
            animation: heroSlide 18s infinite ease-in-out,
                       slowZoom 18s infinite ease-in-out;
          }

          @keyframes slowZoom {
            0%{background-size:100%;}
            50%{background-size:108%;}
            100%{background-size:100%;}
          }

          @keyframes heroSlide {
            0%{background-image:url("/hero1.jpg");}
            33%{background-image:url("/hero2.webp");}
            66%{background-image:url("/hero2.jpg");}
            100%{background-image:url("/hero1.jpg");}
          }

          .hero-title {
            font-family:'Playfair Display',serif;
            font-size:clamp(38px,7vw,60px);
            font-weight:400;
            line-height:1.05;
            color:#fff;
            animation: fadeUp 1.1s ease forwards;
          }

          .hero-title span { font-style:italic; }

          .divider {
            width:56px;
            height:1px;
            background:#eee;
            margin:22px auto;
            opacity:.8;
          }

          .hero-quote {
            font-family:'Inter',sans-serif;
            letter-spacing:1.6px;
            text-transform:uppercase;
            color:#f2f2f2;
            animation: fadeIn 1.6s ease forwards;
            opacity:0;
          }

          @keyframes fadeUp {
            from{opacity:0; transform:translateY(28px);}
            to{opacity:1; transform:translateY(0);}
          }

          @keyframes fadeIn {
            to{opacity:1;}
          }
        `}</style>
      </div>
    </section>
  );
};

export default Hero;
