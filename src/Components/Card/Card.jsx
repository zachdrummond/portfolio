const Card = ({title, children, text, image, alt}) => {
    return (
      <div className="col mb-4">
        <div className="card">
          <div className="card-body">
            {/* Card Title */}
            <div className="row">
              <div className="col-sm-9">
                <h5 className="card-title">{title}</h5>
              </div>
  
              <div className="col-sm-3 ps-5">
                {children}
              </div>
            </div>
  
            {/* Card Text */}
            <div className="row">
              <div className="col-sm-12">
                <p className="card-text">
                  {text}
                </p>
              </div>
            </div>
          </div>
  
          {/* Card Image */}
          <img
            className="card-img-bottom"
            src={image}
            alt={alt}
          />
        </div>
      </div>
    );
  };
  
  export default Card;  