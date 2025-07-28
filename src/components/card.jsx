import React from "react";
import './card.css';
import Tile from "./tile";

const SectionCards = ({ cards = [], addToCart }) => {
  if (!cards.length) return <p>Nessun prodotto trovato.</p>;

  return (
    <div className="cards-container">
      {cards.map(card => (
        <Tile
          key={card.id}
          id={card.id}
          img={card.image}
          title={card.name}
          price={card.price}
          variant={card.variant}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default SectionCards;
