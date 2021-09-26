import "./About.css";
import IMAGES from "../../images/images";
import TechSkills from "../../Components/TechSkills/TechSkills";
import Section from "../../Components/Section/Section";

const About = () => {
  return (
    <Section id="About" name="Hey, I'm Zach!">
      <div className="d-flex align-items-center">
        <div className="col-3 p-0">
          <img
            className="img-fluid img-thumbnail rounded-circle w-75"
            src={IMAGES.Headshot}
            alt="Head Shot of Zach Drummond"
          />
        </div>
        <div className="col-9 p-0">
          <h2>
            I'm a full stack web developer with a passion for developing
            mobile-first, user-friendly apps that solve real world needs.
          </h2>
        </div>
      </div>
      <TechSkills />
    </Section>
  );
};

export default About;
