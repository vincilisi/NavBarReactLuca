import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import SectionCards from "../components/card";
import prodotti from '../../mockData/prodotti.json';
import categorySelection from "../utils/categori-selection";
import '../pages/css/prodotti.css';

const categories = [
    {
        name: "burgers",
        label: "Burgers",
        img: "https://s7d1.scene7.com/is/image/mcdonalds/LeftRail_BurgersPCP_160x160:category-panel-left-desktop"
    },
    {
        name: "beverage",
        label: "Beverage",
        img: "https://s7d1.scene7.com/is/image/mcdonalds/NavImage_Beverages_160x160:category-panel-left-desktop"
    },
    {
        name: "dessert",
        label: "Dessert",
        img: "https://s7d1.scene7.com/is/image/mcdonalds/desserts_shakes_300x300:category-panel-left-desktop"
    }
];

const Prodotti = () => {
    const { name } = useParams();
    const { searchQuery, setSearchQuery, addToCart } = useOutletContext();

    const [cards, setCards] = useState([]);

    useEffect(() => {
        const categoria = categorySelection(name);

        const risultati = prodotti.filter(card =>
            categoria?.includes(card.category) &&
            card.name &&
            card.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setCards(risultati);
    }, [name, searchQuery]);

    return (
        <div className="prodotti-layout">
            <aside className="sidebar">
                {categories.map(cat => (
                    <Link
                        key={cat.name}
                        to={`/app/prodotti/${cat.name}`}
                        className={`sidebar-item ${name === cat.name ? "active" : ""}`}
                    >
                        <img src={cat.img} alt={cat.label} className="sidebar-img" />
                        <span className="sidebar-label">{cat.label}</span>
                    </Link>
                ))}
            </aside>

            <main className="main-prodotti">
                <h1>{name ? name.charAt(0).toUpperCase() + name.slice(1) : 'Prodotti'}</h1>

                <div className="search-container">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Cerca prodotto..."
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                </div>

                <SectionCards cards={cards} addToCart={addToCart} />
            </main>
        </div>
    );
};

export default Prodotti;
