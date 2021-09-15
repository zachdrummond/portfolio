import "./About.css";
import IMAGES from "../../images/images";
import Section from "../../Components/Section/Section.jsx";

const About = () => {
  return (
    <>
      <Section
        title="About Me"
        brand="I am a full stack web developer with a passion for developing
        mobile-first, user-friendly apps that solve real world needs."
      >
        <img
          className="img-fluid img-thumbnail"
          src={IMAGES.Headshot}
          alt="Head Shot of Zach Drummond"
          id="aboutMeImg"
          height="90"
        />
        <p>
          After 6 rewarding years of working in vocational ministry, I decided
          to pursue my passion for coding in order to solve problems with
          technology.
          <br /> <br />
          I earned a certificate in full stack web development from the Georgia
          Institute of Technology. During the course, I gained a reputation for
          being a team leader on group projects. My strengths include
          strategizing for efficiency, communicating and organizing all of the
          details, and synergizing my team. I have hands-on experience in
          building full stack applications, including custom user authentication
          and authorization.
          <br /> <br />
          Does your company or organization need help developing or maintaining
          a website? I'll apply my skills in leadership, interpersonal
          relationships, and web development to meet all of your needs.
        </p>
      </Section>
    </>
  );
};

export default About;
