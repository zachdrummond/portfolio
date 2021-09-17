import "./Projects.css";
import IMAGES from "../../images/images";

const Projects = () => {
  return (
    <main id="Projects" className="container mt-5">
      <h1 className="text-center">Projects</h1>
      <hr />
      <div className="row row-cols-3">
        {Object.keys(IMAGES.Projects).map((key) => {
          return (
            <img
            className="p-0"  
            key={key}
              src={IMAGES.Projects[key]}
              alt="Head Shot of Zach Drummond"
            />
          );
        })}
      </div>
    </main>
  );
};

export default Projects;
