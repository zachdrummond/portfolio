const Carousel = ({ id, images, alt }) => {
  console.log(id);
  return (
    <div
      id={`carousel-${id}`}
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={images.one} className="d-block w-100" alt={alt} />
        </div>
        {images.two ? (
          <div className="carousel-item">
            <img src={images.two} className="d-block w-100" alt={alt} />
          </div>
        ) : (
          ""
        )}
        {images.three ? (
          <div className="carousel-item">
            <img src={images.three} className="d-block w-100" alt={alt} />
          </div>
        ) : (
          ""
        )}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#carousel-${id}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#carousel-${id}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
