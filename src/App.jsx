import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Achievements from "./components/Achievements/Achievements";
import Projects from "./components/Projects/Projects";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";
import Background from "./components/Background/Background";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import BackToTop from "./components/BackToTop/BackToTop";

function App() {
  return (
    <>
      <Background />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <Footer />

      <BackToTop />
    </>
  );
}

export default App;