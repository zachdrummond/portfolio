import TechSkills from "../../Components/TechSkills/TechSkills"
import Carousel from "../../Components/Carousel/Carousel";
import IMAGES from "../../images/images";

const About = () => {
  return (
    <main id="About" className="container mt-5 text-center">
      <h1>Hey, I'm Zach!</h1>
      <br />
      {/* <img
        className="img-fluid img-thumbnail"
        src={IMAGES.Headshot}
        alt="Head Shot of Zach Drummond"
        id="aboutMeImg"
        height="90"
      /> */}
      <TechSkills images={IMAGES.Projects.FindYourAdventure.images}/>
      <Carousel/>
    </main>
  );
};

export default About;
