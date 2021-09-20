// The Container for the Footer
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="d-flex bg-dark position-relative justify-content-center p-3 mt-5">
      <button
        type="button"
        className="btn position-absolute bottom-100"
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
