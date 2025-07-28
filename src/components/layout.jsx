import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./Footer";

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

      if (existingItem.quantity === 1) {
        const confirmDelete = window.confirm("Do you want to remove the product from the cart?");
        if (!confirmDelete) {
          return prevItems;
        }
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

  return (
    <>
      <Navbar
        onSearch={setSearchQuery}
        cartItems={cartItems}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
      <main className="full-height">
        <Outlet context={{ searchQuery, addToCart }} />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
