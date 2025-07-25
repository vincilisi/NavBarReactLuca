import React, { useEffect, useRef, useState } from "react";
import './navbar.css';
import { Link } from "react-router-dom";
import HomePages from "../pages/homepages";
import Allergeni from "../pages/allergeni";
import McImg from "../assets/media/mc.png"

function Navbar({ onSearch }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const anchorRefPromo = useRef();
  const anchorRefAller = useRef();
  useEffect(() => {
    if (anchorRefPromo && anchorRefAller) {
      anchorRefPromo.current.href = "promozioni";
      anchorRefAller.current.href = "allergeni";
    }
    return
  }, []);

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
        <img className="imglogo" src={McImg} alt="logo" />
      </div>

      {/* Home */}
      <div className="nav-section">
        <Link className="home" to={"/"}>Home</Link>

        {/* Prodotti */}
        <div className="nav-section prodotti">
          <button onClick={toggleDropdown} className="dropdown-toggle">Prodotti</button>
          {isOpen && (
            <ul className="dropdown-menu">
              <li><Link to={"prodotti/panini"}>Panini</Link></li>
              <li><Link to={"prodotti/bevande"}>Bevande</Link></li>
              <li><Link to={"prodotti/dessert"}>Dessert</Link></li>
            </ul>
          )}
        </div>

        {/* Allergeni */}
        <Link className="allergeni" to={"allergeni"} ref={anchorRefAller}>Allergeni</Link>


        {/* Promozioni */}

        <Link className="promozioni" to={"promozioni"} ref={anchorRefPromo}>Promozioni</Link>
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
    </nav >
  );
}

export default Navbar;
