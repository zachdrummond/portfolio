import About from "./Containers/About/About.jsx";
import Contact from "./Containers/Contact/Contact.jsx";
import Footer from "./Containers/Footer/Footer.jsx";
import Navbar from "./Containers/Navbar/Navbar.jsx";
import Projects from "./Containers/Projects/Projects.jsx";
import Projects2 from "./Containers/Projects/Projects.jsx";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Projects2/>
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
