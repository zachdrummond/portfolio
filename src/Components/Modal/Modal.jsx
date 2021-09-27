import Carousel from "../Carousel/Carousel";
import GitHub from "../../Components/Icons/GitHub";
import Link from "../../Components/Icons/Link";

// SECTION - Projects
// SUMMARY - Displays reusable Bootstrap Modal of project images and information
// PROPS - All come from a specific project
const Modal = ({ id, name, description, images, alt, link, gitHub, tech }) => {
  return (
    <div
      className="modal fade"
      id={`modal-${id}`} // Needs a specific id to differentiate it from the other modals
      tabIndex="-1"
      aria-labelledby={`modal-${id}`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          {images.one ? <Carousel id={id} images={images} alt={alt} /> : ""}
          <div className="modal-header mt-3 position-relative">
            <h5
              className="modal-title position-absolute top-50 start-50 translate-middle" // Centers this header
              id={id}
            >
              {name}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <span>{tech}</span>
            <hr />
            {description}
          </div>
          <div className="modal-footer justify-content-center">
            {/* Link to Website */}
            <Link href={link} />
            {/* Link to Website on GitHub */}
            <GitHub href={gitHub} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
