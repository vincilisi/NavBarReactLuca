import './card.css'
const Tile = ({ id, img, title, price }) => {
    return (
        <div className="card">
            <div className="cards-image-container">
                <img src={img} alt={title} className="img" />
            </div>
            <div className="card-text">
                <h2 className="title">{title}</h2>
                <p className="card-price">${price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Tile;
