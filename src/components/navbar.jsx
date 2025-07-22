import React, { useState } from "react";
import './navbar.css';

function Navbar({ onSearch }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const toggleDropdown = () => setIsOpen(prev => !prev);

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query); // Passa la query al componente genitore
    }
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-section logo">
        <img className="imglogo" src="https://imgs.search.brave.com/89qXELwgP6g3psNsHvwDOEdq3LbHyg_JA94nvl88j7w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzE2LzIvbWNkb25h/bGRzLWxvZ28tcG5n/X3NlZWtsb2dvLTE2/ODQ2NC5wbmc" alt="logo" />
      </div>

      {/* Home */}
      <div className="nav-section home">
        <a href="#">Home</a>
      </div>

      {/* Prodotti */}
      <div className="nav-section prodotti">
        <button onClick={toggleDropdown} className="dropdown-toggle">Prodotti ▼</button>
        {isOpen && (
          <ul className="dropdown-menu">
            <li><a href="#">Panini</a></li>
            <li><a href="#">Bevande</a></li>
            <li><a href="#">Dessert</a></li>
          </ul>
        )}
      </div>

      {/* Allergeni */}
      <div className="nav-section allergeni">
        <a href="#">Allergeni</a>
      </div>

      {/* Promozioni */}
      <div className="nav-section promozioni">
        <a href="#">Promozioni</a>
      </div>

      {/* Search */}
      <div className="nav-section search-area">
        <input
          type="text"
          className="search-input"
          placeholder="Cerca..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-button" type="button" onClick={handleSearch}>
          Cerca
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
