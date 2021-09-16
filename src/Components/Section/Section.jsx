const Section = ({ id, title, brand, children }) => {
  return (
    <main id={id} className="container">
      <div className="row">
        <div className="card col-md-12 mt-5 bg-light">
          <div className="card-body">
            <h2 className="header fw-bold font">{title}</h2>
            {brand ? <p id="brand">{brand}</p> : ""}
            <hr />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Section;
