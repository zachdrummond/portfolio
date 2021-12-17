import IMAGES from "../../images/images";
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
          <span className="HoverBlue p-2">About</span>
        </a>
        {/* Portfolio */}
        <a className="navbar-brand" href="#Projects">
          <span className="HoverBlue p-2">Projects</span>
        </a>
        {/* Contact */}
        <a className="navbar-brand" href="#Contact">
          <span className="HoverBlue p-2">Contact</span>
        </a>
        {/* Resume */}
        <a
          className="navbar-brand"
          role="button" // For Assistive Technologies
          href="https://docs.google.com/document/d/1Lg_N5xJ_PITKCcIUaj6RQqQ6mVqgH2fbwWRqjNZHfrM/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <span className="HoverBlue p-2">Resume</span>
        </a>
        {/* LinkedIn Icon */}
        <LinkedIn />
        {/* GitHub Icon */}
        <GitHub href="https://github.com/zachdrummond" image={IMAGES.General.GitHub} alt="GitHub Logo"/>
      </div>
    </div>
  );
};

export default Links;
