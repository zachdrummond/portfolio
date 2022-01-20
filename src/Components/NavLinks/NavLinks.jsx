import GitHub from "../Icons/GitHub";
import LinkedIn from "../Icons/LinkedIn";

// SECTION - Navbar
// SUMMARY - Displays the nav-items and links to other resources
const Links = () => {
  return (
    <div id="navbarMenu" className="collapse navbar-collapse text-end">
      <div className="navbar-nav ms-auto fw-bold">
        {/* About */}
        <a className="navbar-brand" href="#About">
          About
        </a>
        {/* Portfolio */}
        <a className="navbar-brand" href="#Projects">
          Projects
        </a>
        {/* Contact */}
        <a className="navbar-brand" href="#Contact">
          Contact
        </a>
        {/* Resume */}
        <a
          className="navbar-brand"
          role="button" // For Assistive Technologies
          href="https://docs.google.com/document/d/1Lg_N5xJ_PITKCcIUaj6RQqQ6mVqgH2fbwWRqjNZHfrM/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
        {/* LinkedIn Icon */}
        <LinkedIn />
        {/* GitHub Icon */}
        <GitHub href="https://github.com/zachdrummond"/>
      </div>
    </div>
  );
};

export default Links;
