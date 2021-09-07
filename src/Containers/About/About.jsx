import IMAGES from "../../images/images";
import "./About.css";

const About = () => {
  return (
    <main>
      {/* About Me Card */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="card col-md-8 mt-5 bg-light">
            <div className="card-body">
              {/* Header - About Me */}
              <div className="row" id="row1">
                <div className="col-sm-12" id="Header">
                  <h2 className="card-title font-weight-bold font">About Me</h2>
                  <p id="brand">
                    I am a full stack web developer with a passion for
                    developing mobile-first, user-friendly apps that solve real
                    world needs.
                  </p>
                  <hr />
                </div>
              </div>

              {/* Picture and Paragraph */}
              <div className="row" id="row2">
                <div className="col-sm-12" id="Picture">
                  <img
                    className="img img-thumbnail"
                    src={IMAGES.HeadShot}
                    alt="Head Shot of Zach Drummond"
                    id="aboutMeImg"
                  />
                  <p>
                    After 6 rewarding years of working in vocational ministry, 
                    I decided to pursue my passion for coding in order to solve
                    problems with technology.
                    <br /> <br />
                    I earned a certificate in full stack web development from 
                    the Georgia Institute of Technology. During the course, I 
                    gained a reputation for being a team leader on group projects.
                    My strengths include strategizing for efficiency, communicating 
                    and organizing all of the details, and synergizing my team. 
                    I have hands-on experience in building full stack applications,
                    including custom user authentication and authorization.
                    <br /> <br />
                    Does your company or organization need help developing or 
                    maintaining a website? I'll apply my skills in leadership, 
                    interpersonal relationships, and web development to meet all
                    of your needs.
                    <br /> <br />
                    In my spare time I like to study the Bible, train my
                    miniature Aussie, go on hikes with my beautiful wife, and
                    bring people together with games and meaningful conversation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;