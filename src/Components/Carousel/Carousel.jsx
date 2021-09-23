const Carousel = ({ id, images, alt }) => {
  return (
    <div
      id={`carousel-${id}`}
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={images.one} className="d-block w-100 img-fluid" alt={alt} />
        </div>
        {images.two ? (
          <div className="carousel-item">
            <img src={images.two} className="d-block w-100 img-fluid" alt={alt} />
          </div>
        ) : (
          ""
        )}
        {images.three ? (
          <div className="carousel-item">
            <img src={images.three} className="d-block w-100 img-fluid" alt={alt} />
          </div>
        ) : (
          ""
        )}
      </div>
      {images.two ? (
        <>
          {" "}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={`#carousel-${id}`}
            data-bs-slide="prev"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="red"
              className="bi bi-arrow-left-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
            </svg>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target={`#carousel-${id}`}
            data-bs-slide="next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="red"
              className="bi bi-arrow-right-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
            </svg>
            <span className="visually-hidden">Next</span>
          </button>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Carousel;
