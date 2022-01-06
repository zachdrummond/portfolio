import "./About.css";
import IMAGES from "../../images/images";
import TechSkills from "../../Components/TechSkills/TechSkills";
import Section from "../../Components/Section/Section";

// SECTION - About
// SUMMARY - Displays the About Section with a header, image, tagline, and technical skills
const About = () => {
  return (
    <Section id="About" name="Hey, I'm Zach!">
      <div className="d-flex align-items-center justify-content-around">
        <div className="col-lg-2">
          <img
            id="headshot"
            className="img-fluid img-thumbnail rounded-circle"
            src={IMAGES.Profiles.GlassesHeadshotCircle}
            alt="Head Shot of Zach Drummond"
          />
        </div>
        <div className="col-lg-9">
          <h2 className="m-0">
            I'm a software engineer with a passion for consistently achieving
            results through innovative software solutions that users love.
          </h2>
        </div>
      </div>
      <TechSkills />
    </Section>
  );
};

export default About;
