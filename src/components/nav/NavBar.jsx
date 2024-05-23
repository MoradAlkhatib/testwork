
import { NavLink } from "react-router-dom";
import "./nav.css";

function NavBar() {
  return (
  
    <nav className='nav'>
      <ul className="list">
        <li> <NavLink style={{color: "black",
    textDecoration :"none"}} to="/">Logo</NavLink></li>
        <li><NavLink style={{color: "black",
    textDecoration :"none"}} to="/animals">animal</NavLink></li>
        <li><NavLink style={{color: "black",
    textDecoration :"none"}} to="/about-us">About Us</NavLink></li>
      </ul>
     
     
    </nav>
  );
}

export default NavBar;