import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import McImg from "../assets/media/mc.png";
import "./navbar.css";
import SearchButtonWithInput from "./search";
import CartLogin from "./cart-login";
import { useAuth } from "../context/AuthContext";  // Importa il contesto auth

const Navbar = () => {
  const { user, auth } = useAuth();  // prendi user e auth dal contesto

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      // opzionale: puoi fare redirect o messaggio di logout
    } catch (error) {
      console.error("Errore logout:", error);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-section logo">
        <Link to="/">
          <img className="imglogo" src={McImg} alt="logo" />
        </Link>
      </div>

      {!isMobile && (
        <>
          <div className="nav-section">
            <Link to="/app/home" className="home">Home</Link>
            <Link to="/app/prodotti" className="prodotti">Prodotti</Link>
            <Link to="/app/allergeni" className="allergeni">Allergeni</Link>
            <Link to="/app/mappe" className="mappe">Dove siamo nel Mondo</Link>
          </div>

          <SearchButtonWithInput />

          <CartLogin />

          <div className="login-logout">
            {user ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <button>Login</button>  // qui puoi aprire modal o redirect
            )}
          </div>
        </>
      )}

      {isMobile && (
        <>
          <button
            className={`hamburger-icon ${isSidebarOpen ? "open" : ""}`}
            onClick={toggleSidebar}
            aria-label="Menu"
            aria-expanded={isSidebarOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <SearchButtonWithInput />

          <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
            <Link to="/app/home" onClick={() => setIsSidebarOpen(false)} className="home">Home</Link>
            <Link to="/app/prodotti" onClick={() => setIsSidebarOpen(false)} className="prodotti">Prodotti</Link>
            <Link to="/app/allergeni" onClick={() => setIsSidebarOpen(false)} className="allergeni">Allergeni</Link>
            <Link to="/app/mappe" onClick={() => setIsSidebarOpen(false)} className="mappe">Dove siamo nel Mondo</Link>

            <CartLogin />

            <div className="login-logout">
              {user ? (
                <button onClick={handleLogout}>Logout</button>
              ) : (
                <button>Login</button>
              )}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
