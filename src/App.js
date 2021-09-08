import About from "./Containers/About/About.jsx"
import Navbar from "./Containers/Navbar/Navbar.jsx";
import Projects from "./Containers/Projects/Projects.jsx";
import Footer from "./Containers/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Projects/>
      <Footer />
    </>
  );
}

export default App;
