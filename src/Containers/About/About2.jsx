import IMAGES from "../../images/images";

const About2 = () => {
  return (
    <main className="container mt-5 text-center">
      <h1 className="text-center">Hey, I'm Zach!</h1>
      <br />
      {/* <img
        className="img-fluid img-thumbnail"
        src={IMAGES.Headshot}
        alt="Head Shot of Zach Drummond"
        id="aboutMeImg"
        height="90"
      /> */}
      <h2>
        I'm a full stack web developer with a passion for developing {<br />}
        mobile-first, user-friendly apps that solve real world needs.
      </h2>
      <h1 className="mt-5">Technical Skills</h1>
      <hr />
      <img
        src={IMAGES.Skills.HTML}
        alt="Head Shot of Zach Drummond"
        height="100"
      />
      <img
        src={IMAGES.Skills.CSS}
        alt="Head Shot of Zach Drummond"
        height="100"
      />
      <img
        src={IMAGES.Skills.React}
        alt="Head Shot of Zach Drummond"
        height="100"
      />
      <img
        src={IMAGES.Skills.Javascript}
        alt="Head Shot of Zach Drummond"
        height="100"
      />
      <img
        src={IMAGES.Skills.Nodejs}
        alt="Head Shot of Zach Drummond"
        height="100"
      />
      <img
        src={IMAGES.Skills.Git}
        alt="Head Shot of Zach Drummond"
        height="100"
      />
      <img
        src={IMAGES.Skills.MySQL}
        alt="Head Shot of Zach Drummond"
        height="100"
      />
      <img
        src={IMAGES.Skills.MongoDB}
        alt="Head Shot of Zach Drummond"
        height="100"
      />
      <img
        src={IMAGES.Skills.Expressjs}
        alt="Head Shot of Zach Drummond"
        height="100"
      />
    </main>
  );
};

export default About2;
