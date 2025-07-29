import React, { useState } from "react";
import './navbar.css';
import { Link, useNavigate } from "react-router-dom";
import McImg from "../assets/media/mc.png";
import CartLogin from "./cart-login";
import SearchButtonWithInput from "./serch";
import { CiLogin } from "react-icons/ci";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const { user, auth } = useAuth();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Se vuoi fare redirect alla pagina di login
    navigate("/login");
  };

  const handleLogoutClick = async () => {
    try {
      await signOut(auth);
      // opzionale: dopo logout vai alla home o login
      navigate("/");
    } catch (error) {
      console.error("Errore logout:", error);
    }
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
      <SearchButtonWithInput
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={(query) => console.log("Search query:", query)}
      />

      {/* Bottone login/logout */}
      <div className="nav-section login-logout">
        {user ? (
          <button onClick={handleLogoutClick}>
            Logout
          </button>
        ) : (
          <button onClick={handleLoginClick}>
            <CiLogin /> Login
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
