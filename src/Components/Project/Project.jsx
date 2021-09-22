import Modal from "../../Components/Modal/Modal";

const Project = ({ id, name, pitch, description, images, alt, link, gitHub, tech }) => {
  return (
    <figure className="position-relative p-0 m-0">
      <img className="gallery figure-img img-fluid m-0" src={images.logo} alt={alt} />
      <figcaption className="w-100 position-absolute text-center">
        {name} <br /> <span> {pitch} </span>
      </figcaption>
      {/* Moves the top left margin edge by half its size */}
      <button
        type="button"
        className="btn btn-danger position-absolute top-50 start-50 translate-middle"
        data-bs-toggle="modal"
        data-bs-target={`#modal-${id}`}
      >
        Learn More
      </button>
      <Modal
        id={id}
        name={name}
        description={description}
        images={images}
        alt={alt}
        link={link}
        gitHub={gitHub}
        tech={tech}
      />
    </figure>
  );
};

export default Project;
