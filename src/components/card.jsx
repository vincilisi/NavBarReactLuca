import React from "react";
import './card.css';
import BigMac from '../assets/media/big-mac.png';

const cards = [
  {
    id: 1,
    img: "https://imgs.search.brave.com/ke1Z3-NRvsdXW8utTeSMRyMz6UUydSqj5EojJQKYDhg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L3Jv/bmFsZG1jZG9uYWxk/L2ltYWdlcy9iL2Ix/L1JjMmQwZjFjYmU5/OGY3ODcyZDQ1ODg3/OWM3YTgzYTIyOC5w/bmcvcmV2aXNpb24v/bGF0ZXN0L3NjYWxl/LXRvLXdpZHRoLWRv/d24vMjUwP2NiPTIw/MjEwNTAxMDczNTA4",
    title: "Crispy",
    price: 10.99
  },
  {
    id: 2,
    img: BigMac,
    title: "Big Mac",
    price: 12.99
  }
];

const Card = ({ searchTerm }) => {
  const risultati = cards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="card-container">
      {risultati.length > 0 ? (
        risultati.map(card => (
          <div key={card.id} className="card">
            <div className="card-image-container">
              <img src={card.img} alt={card.title} className="img" />
            </div>
            <div className="card-text">
              <h2 className="card-title">{card.title}</h2>
              <p className="card-price">${card.price.toFixed(2)}</p>
            </div>
          </div>
        ))
      ) : (
        <p style={{ color: '#ccc', fontStyle: 'italic' }}>
          Nessun prodotto trovato per "{searchTerm}"
        </p>
      )}
    </div>
  );
};

export default Card;
