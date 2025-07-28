// src/components/layout.jsx
import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./Footer";

export const CartContext = createContext();

const Layout = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prevItems => {
      const index = prevItems.findIndex(
        i => i.id === item.id && i.size === item.size
      );
      if (index !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[index].quantity += 1;
        return updatedItems;
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (item) => {
    setCartItems(prevItems =>
      prevItems.map(i =>
        i.id === item.id && i.size === item.size
          ? { ...i, quantity: (i.quantity || 1) + 1 }
          : i
      )
    );
  };

  const decreaseQuantity = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id && i.size === item.size);

      if (!existingItem) return prevItems;

      // Se la quantità è 1, lo rimuove (ma la conferma avviene nel componente CartLogin)
      if (existingItem.quantity === 1) {
        return prevItems.filter(i => !(i.id === item.id && i.size === item.size));
      } else {
        return prevItems.map(i =>
          i.id === item.id && i.size === item.size
            ? { ...i, quantity: i.quantity - 1 }
            : i
        );
      }
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const contextValue = {
    cartItems,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    setSearchQuery,
  };

  return (
    <CartContext.Provider value={contextValue}>
      <Navbar />
      <main className="full-height">
        <Outlet context={{ searchQuery, setSearchQuery, addToCart }} />
      </main>
      <Footer />
    </CartContext.Provider>
  );
};

export default Layout;
