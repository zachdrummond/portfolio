import "./Footer.css";

// The Container for the Footer
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="d-flex bg-dark p-3 mt-5 justify-content-center position-relative">
      <button
        id="scrollToTop"
        type="button"
        className="btn position-absolute"
        onClick={scrollToTop}
      >
        ☝️
      </button>
      <span className="text-secondary">
        &copy; Zach Drummond {new Date().getFullYear()}
      </span>
    </footer>
  );
};

export default Footer;
