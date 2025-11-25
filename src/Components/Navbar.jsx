import { Link } from "react-router-dom";
const Navbar = () => {
  const title = "Jackie Chan Adventures";
  const year = "2000";

  return (
    <nav className="navbar">
      <h1>{title} {year}</h1>
      <div className="nav-links">
        <Link className="navlinksec" to="/">Home</Link>
        <Link className="navlinksec" to="/About">About</Link>
         <Link className="navlinksec" to="/Cards">Cards</Link>
       
       
      </div>
    </nav>
  );
};

export default Navbar;
