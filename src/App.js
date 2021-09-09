import About from "./Containers/About/About.jsx";
import Contact from "./Containers/Contact/Contact.jsx";
import Navbar from "./Containers/Navbar/Navbar.jsx";
import Projects from "./Containers/Projects/Projects.jsx";
import Footer from "./Containers/Footer/Footer.jsx";

function App() {
  return (
    <div id="page-container">
      <Navbar />
      <div id="content-wrap">
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
