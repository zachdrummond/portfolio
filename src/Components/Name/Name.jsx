import { useState, useEffect } from "react";

// SECTION - Navbar
// SUMMARY - Displays brand name and changes it based on scroll position
const Name = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // SUMMARY - Checks the vertical scroll position and sets the state of isScrolled
  // RETURNS - Nothing
  const checkScrollPosition = () =>
    window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);

  // SUMMARY - Adds event listener to scroll, calls function, removes event listener
  // RETURNS - Nothing
  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return (
    <>
      <a id="name" className="navbar-brand fw-bold font ms-3" href="/">
        {isScrolled || window.innerWidth < 500 ? (
          <span>&lt;&nbsp;ZD&nbsp;/&gt;</span>
        ) : (
          <span>&lt;&nbsp;Zach Drummond&nbsp;/&gt;</span>
        )}
      </a>
      {/* Navbar Collapsible Button for Nav-Items on the right side */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarMenu"
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
