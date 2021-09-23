import Carousel from "../Carousel/Carousel";
import GitHub from "../../Components/Icons/GitHub";
import Link from "../../Components/Icons/Link";

const Modal = ({ id, name, description, images, alt, link, gitHub, tech }) => {
  return (
    <div
      className="modal fade"
      id={`modal-${id}`}
      tabIndex="-1"
      aria-labelledby={`modal-${id}`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          {images.one ? <Carousel id={id} images={images} alt={alt} /> : ""}
          <div className="modal-header mt-3">
            <h5 className="modal-title" id={id}>
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
          <div className="modal-footer">
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
