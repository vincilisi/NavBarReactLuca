import React, { useState } from "react";
import './navbar.css';
import { Link } from "react-router-dom";
import McImg from "../assets/media/mc.png";
import { TiShoppingCart } from "react-icons/ti";

function Navbar({ onSearch = () => { }, cartItems = [], increaseQuantity, decreaseQuantity }) {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => setShowCart(prev => !prev);

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

      <div className="cart-login">
        <button className="cart-button" onClick={toggleCart}>
          <TiShoppingCart className="carrello" />
          {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
        </button>

        {showCart && (
          <div className="cart-dropdown">
            {cartItems.length === 0 ? (
              <p className="empty-cart">Cart is empty</p>
            ) : (
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index} className="cart-item">
                    <span>{item.name}{item.size ? ` - ${item.size}` : ''}</span>
                    <div className="cart-item-quantity">
                      <button onClick={() => decreaseQuantity(item)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item)}>+</button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
