import IMAGES from "../../images/images";

const TechSkills = () => {
  return (
    <>
      <h2>
        I'm a full stack web developer with a passion for developing {<br />}
        mobile-first, user-friendly apps that solve real world needs.
      </h2>
      <h1 className="mt-5">Technical Skills</h1>
      <hr />
      {Object.keys(IMAGES.Skills).map((key) => {
        return (
          <img
            key={key}
            src={IMAGES.Skills[key]}
            alt="Head Shot of Zach Drummond"
            height="100"
          />
        );
      })}
    </>
  );
};

export default TechSkills;
