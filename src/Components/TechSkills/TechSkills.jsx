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
      <div className="d-flex justify-content-center">
        {Object.keys(object).map((key) => {
          let { name, image, alt } = object[key];
          return (
            <div
              className="col-2 border border-3 border-dark rounded-pill m-3 p-1"
              key={key}
            >
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
      {/* {objectMap(IMAGES.Skills.TopRow)}
      {objectMap(IMAGES.Skills.BottomRow)} */}
      <div className="row d-flex align-items-center">
        <div className="col-sm-2 col-md-3">
          <img
            className="img-fluid"
            src={IMAGES.Skills.TopRow.React.image}
            alt={IMAGES.Skills.TopRow.React.alt}
          />
          <h5>{IMAGES.Skills.TopRow.React.name}</h5>
        </div>
        <div className="col-sm-2 col-md-3">
          <img
            className="img-fluid"
            src={IMAGES.Skills.TopRow.Nodejs.image}
            alt={IMAGES.Skills.TopRow.Nodejs.alt}
          />
          <h5>{IMAGES.Skills.TopRow.Nodejs.name}</h5>
        </div>
        <div className="col-sm-2 col-md-3">
          <img
            className="img-fluid"
            src={IMAGES.Skills.TopRow.Expressjs.image}
            alt={IMAGES.Skills.TopRow.Expressjs.alt}
          />
          <h5>{IMAGES.Skills.TopRow.Expressjs.name}</h5>
        </div>
        <div className="col-sm-2 col-md-3">
          <img
            className="img-fluid"
            src={IMAGES.Skills.TopRow.MongoDB.image}
            alt={IMAGES.Skills.TopRow.MongoDB.alt}
          />
          <h5>{IMAGES.Skills.TopRow.MongoDB.name}</h5>
        </div>
        <div className="row d-flex align-items-center">
          <div className="col-md-2">
            <img
              className="img-fluid"
              src={IMAGES.Skills.BottomRow.HTML.image}
              alt={IMAGES.Skills.BottomRow.HTML.alt}
            />
            <h5>{IMAGES.Skills.BottomRow.HTML.name}</h5>
          </div>
          <div className="col-md-2">
            <img
              className="img-fluid"
              src={IMAGES.Skills.BottomRow.CSS.image}
              alt={IMAGES.Skills.BottomRow.CSS.alt}
            />
            <h5>{IMAGES.Skills.BottomRow.CSS.name}</h5>
          </div>
          <div className="col-md-2">
            <img
              className="img-fluid"
              src={IMAGES.Skills.BottomRow.Javascript.image}
              alt={IMAGES.Skills.BottomRow.Javascript.alt}
            />
            <h5>{IMAGES.Skills.BottomRow.Javascript.name}</h5>
          </div>
          <div className="col-md-2">
            <img
              className="img-fluid"
              src={IMAGES.Skills.BottomRow.Git.image}
              alt={IMAGES.Skills.BottomRow.Git.alt}
            />
            <h5>{IMAGES.Skills.BottomRow.Git.name}</h5>
          </div>
          <div className="col-md-2">
            <img
              className="img-fluid"
              src={IMAGES.Skills.BottomRow.MySQL.image}
              alt={IMAGES.Skills.BottomRow.MySQL.alt}
            />
            <h5>{IMAGES.Skills.BottomRow.MySQL.name}</h5>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TechSkills;
