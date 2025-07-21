import React, { useEffect, useState } from "react";
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(prev => !prev);



  return (
    <nav className="navbar">
      <div className="logo">
        <img className="imglogo" src="https://imgs.search.brave.com/89qXELwgP6g3psNsHvwDOEdq3LbHyg_JA94nvl88j7w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzE2LzIvbWNkb25h/bGRzLWxvZ28tcG5n/X3NlZWtsb2dvLTE2/ODQ2NC5wbmc" alt="logo" />
      </div>
      <ul className="menu">
        <li className="active"><a href="#">Home</a></li>
        <div className="dropdown">
          <button onClick={toggleDropdown} className="dropdown-toggle">
            Prodotti ▼
          </button>
          {isOpen && (
            <ul className="dropdown-menu">
              <li className="active"><a href="#">Panini</a></li>
              <li className="active"><a href="#">Bevande</a></li>
              <li className="active"><a href="#">Dessert</a></li>
            </ul>
          )}
        </div>
        <li className="active"><a href="#">Chi siamo</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
