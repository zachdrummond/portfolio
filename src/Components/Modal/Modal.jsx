import Carousel from "../Carousel/Carousel";
import Link from "../../Components/Icons/Link";
import SVG from "../../Components/Icons/SVG";

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
              className="modal-title position-absolute top-50 start-50 translate-middle" // Moves the top left margin edge by half its size
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
            <a
              href={gitHub}
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
            >
              <SVG width="27" height="27" color="black">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </SVG>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
