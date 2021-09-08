const Card = (props) => {
    return (
      <div className="col mb-4">
        <div className="card">
          <div className="card-body">
            {/* Card Title */}
            <div className="row">
              <div className="col-sm-9">
                <h5 className="card-title">{props.title}</h5>
              </div>
  
              <div className="col-sm-3 pl-5 pr-0">
                {props.children}
              </div>
            </div>
  
            {/* Card Text */}
            <div className="row">
              <div className="col-sm-12">
                <p className="card-text">
                  {props.text}
                </p>
              </div>
            </div>
          </div>
  
          {/* Card Image */}
          <img
            className="card-img-bottom"
            src={props.image}
            alt={props.alt}
          />
        </div>
      </div>
    );
  };
  
  export default Card;  