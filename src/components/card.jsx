import React from "react";
import './card.css'
import BigMac from '../assets/media/big-mac.png'

const cards=[
    {
        img: "https://imgs.search.brave.com/ke1Z3-NRvsdXW8utTeSMRyMz6UUydSqj5EojJQKYDhg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L3Jv/bmFsZG1jZG9uYWxk/L2ltYWdlcy9iL2Ix/L1JjMmQwZjFjYmU5/OGY3ODcyZDQ1ODg3/OWM3YTgzYTIyOC5w/bmcvcmV2aXNpb24v/bGF0ZXN0L3NjYWxl/LXRvLXdpZHRoLWRv/d24vMjUwP2NiPTIw/MjEwNTAxMDczNTA4",
        title: "Crispy",
        description: "Panino col Hamburgher"
    },
    {
        img: BigMac,
        title: "Big Mac",
        description: "Panino con Carne di Manzo"
    }
]

const Card = () => {

    return (    
        <div className="card-container">
            {cards.map((card) => (
                <a key={card.id} href={card.link} className="card">
            <div className="card-image-container">
              <img src={card.img} alt={card.title} className="img" />
            </div>
            <div className="card-text">
              <h2 className="card-title">{card.title}</h2>
              <p className="card-description">{card.description}</p>
            </div>
          </a>
        ))}
        </div>
    );
};   
export default Card;