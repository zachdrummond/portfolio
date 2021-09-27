import Modal from "../../Components/Modal/Modal";

// SECTION - Projects
// SUMMARY - Displays project image and with animation displays project information and a button to open a Bootstrap Modal
// PROPS - All come from a specific project
const Project = ({
  id,
  name,
  pitch,
  description,
  images,
  alt,
  link,
  gitHub,
  tech,
}) => {
  return (
    <figure className="position-relative p-0 m-0">
      <img
        className="gallery w-100 figure-img img-fluid m-0"
        src={images.logo}
        alt={alt}
      />
      <figcaption className="text-center w-100">
        {name} <br /> <span> {pitch} </span>
      </figcaption>
      <button
        type="button"
        className="gallery-btn btn btn-lg btn-danger"
        data-bs-toggle="modal"
        data-bs-target={`#modal-${id}`} // Needs a specific id to target the right modal to open
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
