import About from "./Containers/About/About.jsx";
import About2 from "./Containers/About/About2.jsx";
import Contact from "./Containers/Contact/Contact.jsx";
import Footer from "./Containers/Footer/Footer.jsx";
import Navbar from "./Containers/Navbar/Navbar.jsx";
import Projects from "./Containers/Projects/Projects.jsx";

function App() {
  return (
    <>
      <Navbar />
      <About2 />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
