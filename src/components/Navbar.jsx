import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

// The navigation page
const Navbar = () => {
  return (
    <div className="sum">
      <div className="logo"><Link to="/"> KRISGO </Link></div>
      <nav classitem="item">
        <ul className="ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/termsAndConditions">Terms and Conditions</Link>
          </li>
          <li>
            <Link to="/analytics">Analytics</Link>
          </li>
          <li>
            <Link to="/social">Kris+ Social</Link>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
