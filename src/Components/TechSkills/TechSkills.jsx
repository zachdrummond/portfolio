import IMAGES from "../../images/images";

const TechSkills = () => {
  return (
    <>
      <h2>
        I'm a full stack web developer with a passion for developing {<br />}
        mobile-first, user-friendly apps that solve real world needs.
      </h2>
      <h1 className="mt-5">Technical Skills</h1>
      <div className="row">
        {Object.keys(IMAGES.Skills).map((key) => {
          let { name, image, alt } = IMAGES.Skills[key];
          return (
            <>
              <img className="img-fluid" key={key} src={image} alt={alt} />
              <h5>{name}</h5>
            </>
          );
        })}
      </div>
    </>
  );
};

export default TechSkills;
