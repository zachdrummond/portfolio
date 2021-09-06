// Name = Brand - <Zach Drummond>
// The left section of the Navbar
const Name = () => {
  return (
    <>
      <a
        id="name"
        className="navbar-brand font-weight-bold font m-0"
        href="/"
      >
        {/* < Arrow */}
        <svg
          width="1.5em"
          height="1.5em"
          viewBox="0 0 16 16"
          className="bi bi-chevron-left"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
        Zach Drummond
        {/* > Arrow */}
        <svg
          width="1.5em"
          height="1.5em"
          viewBox="0 0 16 16"
          className="bi bi-chevron-right"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
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