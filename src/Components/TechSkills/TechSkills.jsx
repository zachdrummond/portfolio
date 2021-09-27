import IMAGES from "../../images/images";
import Section from "../../Components/Section/Section";

const TechSkills = () => {
  const objectMap = (object) => {
    return (
      <div className="d-flex justify-content-center">
        {Object.keys(object).map((key) => {
          let { name, image, alt } = object[key];
          return (
            <div className="col-2 border border-3 border-dark rounded-pill m-3 p-1" key={key}>
              <img className="skill-img img-fluid" src={image} alt={alt} />
              <h5>{name}</h5>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <Section name="Technical Skills">
      {objectMap(IMAGES.Skills.TopRow)}
      {objectMap(IMAGES.Skills.BottomRow)}
    </Section>
  );
};

export default TechSkills;
