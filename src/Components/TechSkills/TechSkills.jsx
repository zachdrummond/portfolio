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
      <div className="d-flex flex-wrap justify-content-evenly align-items-center">
        {Object.keys(object).map((key) => {
          let { name, image, alt } = object[key];
          return (
            <div
              className="skill-frame border border-3 border-light rounded m-2 p-1"
              key={key}
            >
              <img className="skill-img img-fluid" src={image} alt={alt} />
              <p className="skill-title m-0">{name}</p>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    // <div className="container d-flex flex-column border border-5 border-danger">
      <Section name="Technical Skills">
      {objectMap(IMAGES.Skills)}
      {/* {objectMap(IMAGES.Skills.Row2)} */}
      {/* <div className="row d-flex flex-row justify-content-center border border-5 border-primary">
          <div className="col d-flex flex-column skill-frame border border-3 border-light rounded m-2 p-1">
            <img
              className="skill-img img-fluid"
              src={IMAGES.Skills.React.image}
              alt={IMAGES.Skills.React.alt}
            />
            <p className="skill-title m-0 p-0">{IMAGES.Skills.React.name}</p>
        </div>
          <div className="col d-flex flex-column skill-frame border border-3 border-light rounded m-2 p-1">
            <img
              className="skill-img img-fluid"
              src={IMAGES.Skills.Nodejs.image}
              alt={IMAGES.Skills.Nodejs.alt}
            />
            <p className="skill-title m-0 p-0">{IMAGES.Skills.Nodejs.name}</p>
        </div>
          <div className="col d-flex flex-column skill-frame border border-3 border-light rounded m-2 p-1">
            <img
              className="skill-img img-fluid"
              src={IMAGES.Skills.Expressjs.image}
              alt={IMAGES.Skills.Expressjs.alt}
            />
            <p className="skill-title m-0 p-0">
              {IMAGES.Skills.Expressjs.name}
            </p>
        </div>
          <div className="col d-flex flex-column skill-frame border border-3 border-light rounded m-2 p-1">
            <img
              className="skill-img img-fluid"
              src={IMAGES.Skills.MongoDB.image}
              alt={IMAGES.Skills.MongoDB.alt}
            />
            <p className="skill-title m-0 p-0">{IMAGES.Skills.MongoDB.name}</p>
          </div>
      </div>
      <div className="row d-flex flex-row justify-content-center border border-5 border-primary">
          <div className="col skill-frame border border-3 border-light rounded m-2 p-1">
            <img
              className="skill-img img-fluid"
              src={IMAGES.Skills.HTML.image}
              alt={IMAGES.Skills.HTML.alt}
            />
            <p className="skill-title m-0 p-0">{IMAGES.Skills.HTML.name}</p>
        </div>
          <div className="col skill-frame border border-3 border-light rounded m-2 p-1">
            <img
              className="skill-img img-fluid"
              src={IMAGES.Skills.CSS.image}
              alt={IMAGES.Skills.CSS.alt}
            />
            <p className="skill-title m-0 p-0">{IMAGES.Skills.CSS.name}</p>
        </div>
          <div className="col skill-frame border border-3 border-light rounded m-2 p-1">
            <img
              className="skill-img img-fluid"
              src={IMAGES.Skills.JavaScript.image}
              alt={IMAGES.Skills.JavaScript.alt}
            />
            <p className="skill-title m-0 p-0">
              {IMAGES.Skills.JavaScript.name}
            </p>
        </div>
          <div className="col skill-frame border border-3 border-light rounded m-2 p-1">
            <img
              className="skill-img img-fluid"
              src={IMAGES.Skills.Git.image}
              alt={IMAGES.Skills.Git.alt}
            />
            <p className="skill-title m-0 p-0">{IMAGES.Skills.Git.name}</p>
        </div>
          <div className="col skill-frame border border-3 border-light rounded m-2 p-1">
            <img
              className="skill-img img-fluid"
              src={IMAGES.Skills.MySQL.image}
              alt={IMAGES.Skills.MySQL.alt}
            />
            <p className="skill-title m-0 p-0">{IMAGES.Skills.MySQL.name}</p>
          </div>
      </div>
    </div> */}
    </Section>
  );
};

export default TechSkills;
