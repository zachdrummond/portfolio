import "./ProjectGallery.css";
import IMAGES from "../../images/images";
import Project from "../../Components/Project/Project";

const ProjectGallery = () => {
  return (
    <section id="Projects" className="container mt-5">
      <div className="row row-cols-3">
        <div className="col-sm-12">
          <h1 className="text-center">Projects</h1>
        </div>
        {Object.keys(IMAGES.Projects).map((key) => {
          return <Project key={key} {...IMAGES.Projects[key]}/>;
        })}
      </div>
    </section>
  );
};

export default ProjectGallery;
