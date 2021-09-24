import "./ProjectGallery.css";
import IMAGES from "../../images/images";
import Project from "../../Components/Project/Project";
import Section from "../../Components/Section/Section";

const ProjectGallery = () => {
  return (
    <Section id="Projects" name="Projects">
      <div className="row row-cols-3">
        {Object.keys(IMAGES.Projects).map((key) => {
          return <Project key={key} {...IMAGES.Projects[key]} />;
        })}
      </div>
    </Section>
  );
};

export default ProjectGallery;
