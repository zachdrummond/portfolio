// SECTION - Footer
// SUMMARY - Displays the Footer Section with a Scroll to the Top Button and Copyright Info
const Footer = () => {
  // SUMMARY - Scrolls to a particular set of coordinates in the DOM
  // RETURNS - Nothing
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="d-flex bg-dark position-relative justify-content-center p-3 mt-5">
      <button
        type="button"
        className="btn position-absolute bottom-100" // Moves the bottom margin edge
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
