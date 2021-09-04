import "./Navbar.css"
import Name from "../../Components/Name/Name.jsx";
import NavLinks from "../../Components/NavLinks/NavLinks.jsx";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Name/>
      <NavLinks/>
    </nav>
  );
};

export default NavBar;