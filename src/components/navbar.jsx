import React, { use, useEffect, useState } from "react";
import './navbar.css';

const Navbar = () => {
  // State to manage dropdown visibility
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(isOpen => !isOpen);
    // color arcobaleno
    useEffect(() => {
  const arcobaleno = setInterval(() => {
    const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    // Applica il colore di sfondo alla navbar
    const navbarElement = document.querySelector('.navbar');
    if (navbarElement) {
      navbarElement.style.backgroundColor = randomColor;
    }
  }, 500); // Cambia colore ogni 500 ms
  // Pulisci l'intervallo quando il componente viene smontato

  return () => clearInterval(arcobaleno);
}, []);


  return (
    <nav className="navbar">
        <div className="logo"><img className="imglogo" src="https://imgs.search.brave.com/89qXELwgP6g3psNsHvwDOEdq3LbHyg_JA94nvl88j7w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzE2LzIvbWNkb25h/bGRzLWxvZ28tcG5n/X3NlZWtsb2dvLTE2/ODQ2NC5wbmc" alt="logo" /></div>
        <ul className="menu">
            <li className="active"><a href="">Home</a></li>
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
            <li className="active"><a href="">Chi siamo</a></li>
        </ul>
    </nav>
  );
};

export default Navbar;
