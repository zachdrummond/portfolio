import GitHub from "../Icons/GitHub";
import LinkedIn from "../Icons/LinkedIn";

// The Right Section of the Navbar
const Links = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarMenu">
      <div className="navbar-nav ms-auto">
        {/* About */}
        <a className="navbar-brand" href="#About">
          About
        </a>
        {/* Portfolio */}
        <a className="navbar-brand" href="#Projects">
          Projects
        </a>
        {/* Resume */}
        <a
          className="navbar-brand"
          href="https://docs.google.com/document/d/1Lg_N5xJ_PITKCcIUaj6RQqQ6mVqgH2fbwWRqjNZHfrM/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
        {/* Contact */}
        <a className="navbar-brand" href="#Contact">
          Contact
        </a>
        {/* LinkedIn Icon */}
        <LinkedIn />
        {/* GitHub Icon */}
        <GitHub href="https://github.com/zachdrummond" />
      </div>
    </div>
  );
};

export default Links;
