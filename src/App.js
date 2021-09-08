import About from "./Containers/About/About.jsx"
import Navbar from "./Containers/Navbar/Navbar.jsx";
import Portfolio from "./Containers/Portfolio/Portfolio.jsx";
import Footer from "./Containers/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Portfolio/>
      <Footer />
    </>
  );
}

export default App;
