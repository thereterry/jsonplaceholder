import React from "react";
import { NavLink } from "react-router-dom";




const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="#">LOGO A/S</a>
        </div>

        <div className="nav-links">
        
          <NavLink to="/" activeclassname="active">Home</NavLink>
          <NavLink to="/about" activeclassname="active">Om os</NavLink>
          <NavLink to="/news" activeclassname="active">Nyheder</NavLink>
          <NavLink to="/contact"activeclassname="active">Kontakt</NavLink>

          <div className="dropdown">
            <button className="dropbtn">JsonPlaceholder</button>
            <div className="dropdown-title">
                <div className="dropdown-content">
                <NavLink to="/todos" activeclassname="block px-4 py-2 text-gray-800 hover:bg-gray-200">Todos</NavLink>
                <NavLink to="/photos" activeclassname="block px-4 py-2 text-gray-800 hover:bg-gray-200">Photos</NavLink>
                <NavLink to="/posts" activeclassname="block px-4 py-2 text-gray-800 hover:bg-gray-200">Posts</NavLink>
                <NavLink to="/post/" activeclassname="block px-4 py-2 text-gray-800 hover:bg-gray-200">Post</NavLink>
                <NavLink to="/postadmin" activeclassname="block px-4 py-2 text-gray-800 hover:bg-gray-200">PostAdmin</NavLink>
                <NavLink to="/postcreate" activeclassname="block px-4 py-2 text-gray-800 hover:bg-gray-200">PostCreate</NavLink>
                </div>
            </div>
          </div>

          <div>
          <NavLink to="/starships" activeclassname="active">Starships</NavLink>
          </div>
          <div>
            <NavLink to="/login" activeclassname="active">Login</NavLink>
          </div>
          <NavLink to="/admin" activeclassname="active">ADMIN</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
