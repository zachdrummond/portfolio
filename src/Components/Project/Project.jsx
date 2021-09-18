import Modal from "../../Components/Modal/Modal";

const Project = ({ name, description, image, alt, link, gitHub }) => {
  const id = name.replace(/\s+/g, "");

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
        data-bs-target={`#${id}`}
      >
        Learn More
      </button>
      <Modal id={id} name={name} description={description} link={link} gitHub={gitHub} />
    </figure>
  );
};

export default Project;
