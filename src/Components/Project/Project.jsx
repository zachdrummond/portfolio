import Modal from "../../Components/Modal/Modal";

const Project = ({ name, description, image, alt, link, gitHub }) => {
  return (
    <figure className="position-relative border border-5 border-danger">
      <img className="figure-img img-fluid" src={image} alt={alt} />
      <figcaption className="position-absolute text-center">
        {name} <br /> <span> {description} </span>
      </figcaption>
      <button
        type="button"
        className="learnMoreBtn btn btn-danger position-absolute"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Learn More
      </button>
      <Modal link={link} gitHub={gitHub}/>
    </figure>
  );
};

export default Project;
