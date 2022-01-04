import "./ProjectGallery.css";
import IMAGES from "../../images/images";
import Project from "../../Components/Project/Project";
import Section from "../../Components/Section/Section";

// SECTION - About
// SUMMARY
//    1. Creates a container (<Section>)
//    2. Creates another container for a row (<div>)
//    2. Object.keys(object) returns an array of a the object's property names
//    3. .map(key) iterates over the array of property names
//    4. A component (<Project>) is added to each element in the array
//    5. A new array is created, returned, and added to the container (<div>)
const ProjectGallery = () => {
  return (
    <Section id="Projects" name="Projects">
      <div className="row row-cols-md-2 row-cols-lg-3">
        {Object.keys(IMAGES.Projects).map((key) => {
          return <Project key={key} {...IMAGES.Projects[key]} />;
        })}
      </div>
    </Section>
  );
};

export default ProjectGallery;
