import React, { useState } from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import './card.css';

const Tile = ({ id, img, title, price, variant = [], addToCart }) => {
    const [selectedVariant, setSelectedVariant] = useState(variant[0] || null);

    const displayedImage = selectedVariant?.image || img || '';
    const displayedPrice = selectedVariant?.price ?? price ?? 0;
    const displayedSize = selectedVariant?.size || '';

    const handleSelectVariant = (v) => {
        setSelectedVariant(v);
    };

    const handleAddToCart = (e) => {
        e.stopPropagation(); // evita che il click si propaghi
        const item = {
            id,
            name: title,
            image: displayedImage,
            price: displayedPrice,
            size: displayedSize || 'default',
            quantity: 1,
        };
        addToCart(item);
    };

    return (
        <div className="card">
            <div
                className="cart-icon-top-right"
                onClick={handleAddToCart}
                title="Aggiungi al carrello"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleAddToCart(e)}
                style={{ cursor: 'pointer' }}
            >
                <TiShoppingCart size={24} />
            </div>

            <div className="cards-image-container">
                <img src={displayedImage} alt={title} className="img" />
            </div>

            <div className="card-text">
                <h2 className="title">{title}</h2>
                <p className="card-price">
                    {displayedSize && <strong>{displayedSize}: </strong>}
                    {typeof displayedPrice === 'number'
                        ? `$${displayedPrice.toFixed(2)}`
                        : 'Prezzo non disponibile'}
                </p>
            </div>

            {variant.length > 0 && (
                <div className="variant-dots">
                    {variant.map((v, index) => (
                        <button
                            key={index}
                            className={`variant-dot ${selectedVariant?.size === v.size ? 'active' : ''}`}
                            title={v.size}
                            onClick={() => handleSelectVariant(v)}
                            type="button"
                        >
                            {v.size.charAt(0)}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Tile;
