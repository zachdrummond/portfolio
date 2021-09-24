import IMAGES from "../../images/images";

const TechSkills = () => {
  const objectMap = (object) => {
    return (
      <div className="d-flex justify-content-center">
        {Object.keys(object).map((key) => {
          let { name, image, alt } = object[key];
          return (
            <div className="col-2" key={key}>
              <img className="skill-img img-fluid" src={image} alt={alt} />
              <h5>{name}</h5>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <h2>
        I'm a full stack web developer with a passion for developing {<br />}
        mobile-first, user-friendly apps that solve real world needs.
      </h2>
      <h1 className="mt-5">Technical Skills</h1>
      {objectMap(IMAGES.Skills.TopRow)}
      {objectMap(IMAGES.Skills.BottomRow)}
    </>
  );
};

export default TechSkills;
