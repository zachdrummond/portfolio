import "./Projects.css";
import IMAGES from "../../images/images";

const Projects = () => {
  return (
    <main id="Projects" className="container mt-5">
      <div className="row row-cols-3">
        <div className="col-sm-12">
          <h1 className="text-center">Projects</h1>
        </div>
        <div className="col">
          <figure className="position-relative border border-5 border-danger">
            <img
              className="figure-img img-fluid"
              src={IMAGES.Projects.Ciphr}
              alt="Head Shot of Zach Drummond"
              width="100%"
            />
            <figcaption className="position-absolute">
              Project Name <br /> Description
            </figcaption>
            <button type="button" className="btn btn-danger position-absolute">
              Learn More
            </button>
          </figure>
        </div>
        <div className="col">
          <figure className="position-relative border border-5 border-danger">
            <img
              className="figure-img img-fluid"
              src={IMAGES.Projects.Ciphr}
              alt="Head Shot of Zach Drummond"
              width="100%"
            />
            <figcaption className="position-absolute">
              Project Name <br /> Description
            </figcaption>
            <button type="button" className="btn btn-danger position-absolute">
              Learn More
            </button>
          </figure>
        </div>
        <div className="col">
          <figure className="position-relative border border-5 border-danger">
            <img
              className="figure-img img-fluid"
              src={IMAGES.Projects.Ciphr}
              alt="Head Shot of Zach Drummond"
              width="100%"
            />
            <figcaption className="position-absolute">
              Project Name <br /> Description
            </figcaption>
            <button type="button" className="btn btn-danger position-absolute">
              Learn More
            </button>
          </figure>
        </div>
        <div className="col">
          <figure className="position-relative border border-5 border-danger">
            <img
              className="figure-img img-fluid"
              src={IMAGES.Projects.Ciphr}
              alt="Head Shot of Zach Drummond"
              width="100%"
            />
            <figcaption className="position-absolute">
              Project Name <br /> Description
            </figcaption>
            <button type="button" className="btn btn-danger position-absolute">
              Learn More
            </button>
          </figure>
        </div>
        <div className="col">
          <figure className="position-relative border border-5 border-danger">
            <img
              className="figure-img img-fluid"
              src={IMAGES.Projects.Ciphr}
              alt="Head Shot of Zach Drummond"
              width="100%"
            />
            <figcaption className="position-absolute">
              Project Name <br /> Description
            </figcaption>
            <button type="button" className="btn btn-danger position-absolute">
              Learn More
            </button>
          </figure>
        </div>
        <div className="col">
          <figure className="position-relative border border-5 border-danger">
            <img
              className="figure-img img-fluid"
              src={IMAGES.Projects.Ciphr}
              alt="Head Shot of Zach Drummond"
              width="100%"
            />
            <figcaption className="position-absolute">
              Project Name <br /> Description
            </figcaption>
            <button type="button" className="btn btn-danger position-absolute">
              Learn More
            </button>
          </figure>
        </div>
      </div>
    </main>
  );
};

export default Projects;
