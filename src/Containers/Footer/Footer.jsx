import "./Footer.css";

// The Container for the Footer
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-dark p-2 mt-5 text-center">
      <button
        id="scrollToTop"
        type="button"
        className="btn p-0"
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
