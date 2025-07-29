import React, { useState } from "react";
import './navbar.css';
import { Link } from "react-router-dom";
import McImg from "../assets/media/mc.png";
import CartLogin from "./cart-login";
import SearchButtonWithInput from "./serch";
import Login from "../pages/login";
import { CiLogin } from "react-icons/ci";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (query) => {
    console.log("Search query:", query);
  };

  return (
    <nav className="navbar">
      <div className="nav-section logo">
        <Link to="/"><img className="imglogo" src={McImg} alt="logo" /></Link>
      </div>

      <div className="nav-section">
        <Link className="home" to="/app/home">Home</Link>
        <Link className="prodotti" to="/app/prodotti">Products</Link>
        <Link className="allergeni" to="/app/allergeni">Allergens</Link>
        <Link className="promozioni" to="/app/promozioni">Promotions</Link>
      </div>

      <CartLogin />
      <CiLogin />
      <SearchButtonWithInput
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={handleSearch}
      />
    </nav>
  );
}

export default Navbar;
