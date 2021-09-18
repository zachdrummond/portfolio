import GitHub from "../../Components/Icons/GitHub";
import Link from "../../Components/Icons/Link";

const Modal = ({ link, gitHub }) => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Modal title
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">...</div>
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
