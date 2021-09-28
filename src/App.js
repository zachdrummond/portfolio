import { Suspense, lazy } from "react";
import Footer from "./Containers/Footer/Footer";
import Navbar from "./Containers/Navbar/Navbar";
const About = lazy(() => import("./Containers/About/About"));
const Contact = lazy(() => import("./Containers/Contact/Contact"));
const ProjectGallery = lazy(() =>
  import("./Containers/ProjectGallery/ProjectGallery")
);

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <About />
        <ProjectGallery />
        <Contact />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
