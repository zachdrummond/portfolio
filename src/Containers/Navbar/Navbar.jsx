import "./Navbar.css"
import Name from "../../Components/Name/Name.jsx";
import NavLinks from "../../Components/NavLinks/NavLinks.jsx";

// The Container for the Navbar
const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light">
      <Name/>
      <NavLinks/>
    </nav>
  );
};

export default Navbar;