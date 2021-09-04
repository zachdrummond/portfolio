import GitHub from "../Icons/GitHub";
import LinkedIn from "../Icons/LinkedIn";

const Links = () => {
  return (
    <div className="collapse navbar-collapse text-right" id="navbarMenu">
      <div className="navbar-nav ml-auto">
        {/* About */}
        <a className="navbar-brand" href="/">
          About
        </a>
        {/* Portfolio */}
        <a className="navbar-brand" href="/">
          Portfolio
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
        <a className="navbar-brand" href="/contact">
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
