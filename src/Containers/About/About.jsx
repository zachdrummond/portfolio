import "./About.css";
// import IMAGES from "../../images/images";
import TechSkills from "../../Components/TechSkills/TechSkills";
import Section from "../../Components/Section/Section";

const About = () => {
  return (
    <Section id="About" name="Hey, I'm Zach!">
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
      <TechSkills />
    </Section>
  );
};

export default About;
