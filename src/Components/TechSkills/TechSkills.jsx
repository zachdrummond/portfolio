import IMAGES from "../../images/images";

const TechSkills = () => {
  return (
    <>
      <h2>
        I'm a full stack web developer with a passion for developing {<br />}
        mobile-first, user-friendly apps that solve real world needs.
      </h2>
      <h1 className="mt-5">Technical Skills</h1>
      <div className="d-flex justify-content-evenly">
        <div className="">
            <img className="skill-img img-fluid"src={IMAGES.Skills.Javascript.image} alt={IMAGES.Skills.Javascript.alt} />
            <h5>{IMAGES.Skills.Javascript.name}</h5>
          </div>
          <div className="">
            <img className="skill-img img-fluid"src={IMAGES.Skills.React.image} alt={IMAGES.Skills.React.alt} />
            <h5>{IMAGES.Skills.React.name}</h5>
          </div>
          <div className="">
            <img className="skill-img img-fluid"src={IMAGES.Skills.Nodejs.image} alt={IMAGES.Skills.Nodejs.alt} />
            <h5>{IMAGES.Skills.Nodejs.name}</h5>
          </div>
          <div className="">
            <img className="skill-img img-fluid"src={IMAGES.Skills.Expressjs.image} alt={IMAGES.Skills.Expressjs.alt} />
            <h5>{IMAGES.Skills.Expressjs.name}</h5>
          </div>
          <div className="">
            <img className="skill-img img-fluid"src={IMAGES.Skills.MongoDB.image} alt={IMAGES.Skills.MongoDB.alt} />
            <h5>{IMAGES.Skills.MongoDB.name}</h5>
        </div>
      </div>
        <div className="d-flex justify-content-evenly">
          <div className="">
            <img className="skill-img img-fluid"src={IMAGES.Skills.HTML.image} alt={IMAGES.Skills.HTML.alt} />
            <h5>{IMAGES.Skills.HTML.name}</h5>
          </div>
          <div className="">
            <img className="skill-img img-fluid"src={IMAGES.Skills.CSS.image} alt={IMAGES.Skills.CSS.alt} />
            <h5>{IMAGES.Skills.CSS.name}</h5>
          </div>
          <div className="">
            <img className="skill-img img-fluid"src={IMAGES.Skills.Git.image} alt={IMAGES.Skills.Git.alt} />
            <h5>{IMAGES.Skills.Git.name}</h5>
          </div>
          <div className="">
            <img className="skill-img img-fluid"src={IMAGES.Skills.MySQL.image} alt={IMAGES.Skills.MySQL.alt} />
            <h5>{IMAGES.Skills.MySQL.name}</h5>
          </div>
        </div>
    </>
    // {Object.keys(IMAGES.Skills).map((key) => {
    //   let { name, image, alt } = IMAGES.Skills[key];
    //   return (
    //     <>
    //       <img className="img-fluid" key={key} src={image} alt={alt} />
    //       <h5>{name}</h5>
    //     </>
    //   );
    // })}
  );
};

export default TechSkills;
