// src/components/CartLogin.jsx
import { useContext, useEffect, useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from "./layout";
import Popup from "./Popup";
import './cart-login.css';

const CartLogin = () => {
    const [showCart, setShowCart] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [tempRemovedItem, setTempRemovedItem] = useState(null);
    const { cartItems, decreaseQuantity, increaseQuantity } = useContext(CartContext);
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }, [cartItems])
    const toggleCart = () => setShowCart(prev => !prev);

    const handleDecrease = (item) => {
        if (cartItems.length === 1 && item.quantity === 1) {
            setTempRemovedItem(item);
            setIsPopupOpen(true);
        } else {
            decreaseQuantity(item);
        }
    };

    const confirmEmptyCart = () => {
        if (tempRemovedItem) {
            decreaseQuantity(tempRemovedItem);
            setTempRemovedItem(null);
        }
        setIsPopupOpen(false);
    };

    const cancelEmptyCart = () => {
        setTempRemovedItem(null);
        setIsPopupOpen(false);
    };

    return (
        <div className="cart-login">
            <button className="cart-button" onClick={toggleCart}>
                <TiShoppingCart className="carrello" />
                {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
            </button>

            {showCart && (
                <div className="cart-dropdown">
                    {cartItems.length > 0 ? (
                        <ul>
                            {cartItems.map((item, index) => (
                                <li key={index} className="cart-item">
                                    <span>{item.name}{item.size ? ` - ${item.size}` : ''}</span>
                                    <div className="cart-item-quantity">
                                        <button onClick={() => handleDecrease(item)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => increaseQuantity(item)}>+</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="empty-cart-message">The cart is empty.</p>
                    )}
                </div>
            )}

            {isPopupOpen && (
                <Popup onConfirm={confirmEmptyCart} onCancel={cancelEmptyCart} />
            )}
        </div>
    );
};

export default CartLogin;
