import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Hozify</h2>
      
      
      
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Services">Service</Link></li>
        <li><Link to="/partner">Partner</Link></li>
        <li><Link to="/franchise">Franchise</Link></li>
       
        <li><Link to="/blog">Blog</Link></li>
      </ul>

      <div className="navbar-buttons">
         <Link
  to="/moreServ"  onClick={() => window.scrollTo(0, 0)}>
        <button className="book-btn">Book Service</button>
        </Link>
        <Link to="/" 
        className="download-btn"
         onClick={() => window.scrollTo(3800, 3800)}>
     Download App
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;