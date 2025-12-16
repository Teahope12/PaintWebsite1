import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Palette from "./components/Palette";
import PastProjects from "./components/PastProjects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />

      {/* Reduced offset because header is slimmer now */}
      <main style={{ paddingTop: "70px" }}>
        <Hero />
     
        <Services />
        <Palette />
        <PastProjects />
        <Contact />
      </main>
    </>
  );
}

export default App;
