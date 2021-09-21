import About from "./Containers/About/About.jsx";
import Contact from "./Containers/Contact/Contact.jsx";
import Footer from "./Containers/Footer/Footer.jsx";
import Navbar from "./Containers/Navbar/Navbar.jsx";
import ProjectGallery from "./Containers/ProjectGallery/ProjectGallery.jsx";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <ProjectGallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
