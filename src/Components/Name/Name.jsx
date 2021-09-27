// SECTION - Navbar
// SUMMARY - Displays brand name
const Name = () => {
  return (
    <>
      <a id="name" className="navbar-brand fw-bold font ms-3" href="/">
        <span>&lt;&nbsp;</span>Z<span>ach&nbsp;</span>D
        <span>rummond&nbsp;/&gt;</span>
      </a>
      {/* Navbar Collapsible Button for Nav-Items on the right side */}
      <button
        className="navbar-toggler button"
        type="button"
        data-toggle="collapse"
        data-target="#navbarMenu"
        aria-controls="navbarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </>
  );
};

export default Name;
