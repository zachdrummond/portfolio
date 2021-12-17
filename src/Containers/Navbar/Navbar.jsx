import "./Navbar.css"
import Name from "../../Components/Name/Name.jsx";
import NavLinks from "../../Components/NavLinks/NavLinks.jsx";

// SECTION - Navbar
// SUMMARY - Displays the Navbar Section with the Brand Name and Nav Links
const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <Name/>
      <NavLinks/>
    </nav>
  );
};

export default Navbar;