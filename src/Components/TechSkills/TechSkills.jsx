import IMAGES from "../../images/images";
import Section from "../../Components/Section/Section";

// SECTION - About
// SUMMARY - Displays all technical skills by mapping over the images and data in images.js
const TechSkills = () => {
  // SUMMARY
  //    1. Creates a container (<div>)
  //    2. Object.keys(object) returns an array of a the object's property names
  //    3. .map(key) iterates over the array of property names
  //    4. A container (<div>) with the object's image and header is added to each element in the array
  //    5. A new array is created, returned, and added to the container (<div>)
  // ARGUMENTS - object (type - object)
  // RETURNS - A new object (React Element <div>)
  const objectMap = (object) => {
    return (
      <div className="d-flex justify-content-center align-items-center">
        {Object.keys(object).map((key) => {
          let { name, image, alt } = object[key];
          return (
            <div
              className="bob border border-3 border-light rounded m-2 p-1"
              key={key}
            >
              <img className="skill-img img-fluid" src={image} alt={alt} />
              <p className="title m-0">{name}</p>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <Section name="Technical Skills">
      {objectMap(IMAGES.Skills.Row1)}
      {objectMap(IMAGES.Skills.Row2)}
    </Section>
  );
};

export default TechSkills;
